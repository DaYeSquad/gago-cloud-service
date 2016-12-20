// Copyright 2016 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.

import * as fs from 'fs';
import * as path from 'path';
import * as Showdown from 'showdown';

const DirectMailService = require('node-aliyun-dms');

import {Aliyun} from './aliyun';


/**
 * Sending single or batch emails from aliyun.
 */
export class BaseEmailService {

  /**
   * Sends HTML email and returns request id.
   */
  static async sendHtmlEmail(toAddress: string, fromAlias: string, subject: string, htmlBody: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let dms: any = new DirectMailService({
        'accessid': Aliyun.ACCESS_ID,
        'accesskey': Aliyun.ACCESS_SECRET
      });
      dms.sendSingleMail('gago@gagodata.cn', true, 0, toAddress, fromAlias, subject,
        BaseEmailService.escapeInvalidChars_(htmlBody), undefined, (error: any, res: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(res['RequestId']);
        }
      });
    });
  }

  /**
   * Sends change log to addresses.
   * @param toAddresses Address list.
   * @param fromAlias From alias.
   * @param subject Subject of email.
   * @param changelogPath Full path including file name.
   * @param tmpFilePath Full path including file name of version file path.
   * @returns {Promise<void>}
   */
  static async sendChangelog(toAddresses: string[], fromAlias: string, subject: string, changelogPath: string,
                       tmpFilePath: string): Promise<string> {
    // 将当前 package.json 中的 version 写入指定的临时文件
    let lastVersion: string | undefined = undefined;

    const versionFilePath: string = tmpFilePath;
    if (fs.existsSync(versionFilePath)) {
      lastVersion = fs.readFileSync(versionFilePath, 'utf8');
    }

    const packageJson: any = require(path.resolve('./package.json'));
    const currentVersion: string = String(packageJson.version);

    if (currentVersion === lastVersion) { // 如果版本与上一个部署的版本一致则不发送邮件
      return;
    }

    fs.writeFileSync(versionFilePath, packageJson.version, 'utf8');

    // 发送 CHANGELOG.md
    const converter: Showdown.Converter = new Showdown.Converter();
    let dataSourceMdContent: string = fs.readFileSync(changelogPath, 'utf8');

    dataSourceMdContent = dataSourceMdContent.replace(/\(/g, '（');
    dataSourceMdContent = dataSourceMdContent.replace(/\)/g, '）');

    const dataSourceMarkdownHtml: string = converter.makeHtml(dataSourceMdContent);

    const toAddress: string = toAddresses.join(',');

    const htmlBody: string = `<html>
        <p><strong>此邮件为机器生成，请勿回复</strong></p>
        ${dataSourceMarkdownHtml}
       </html>`;

    return await BaseEmailService.sendHtmlEmail(toAddress, fromAlias, subject, htmlBody);
  }

  /**
   * Aliyun does not allow to use brackets in content.
   * @param content Email content.
   * @returns {string} Escaped content.
   * @private
   */
  static escapeInvalidChars_(content: string): string {
    // escape brackets
    let escapedContent: string = content.replace(/\(/g, '（');
    escapedContent = escapedContent.replace(/\)/g, '）');
    return escapedContent;
  }
}
