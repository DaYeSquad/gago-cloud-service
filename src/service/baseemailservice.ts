// Copyright 2016 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.

const DirectMailService = require('node-aliyun-dms');

import {Aliyun} from "./aliyun";

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
      dms.sendSingleMail('gago@gagodata.cn', true, 0, toAddress, fromAlias, subject, htmlBody, undefined, (error: any, res: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(res['RequestId']);
        }
      });
    });
  }
}
