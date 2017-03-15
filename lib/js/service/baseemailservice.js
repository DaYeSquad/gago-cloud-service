"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const fs = require("fs");
const path = require("path");
const Showdown = require("showdown");
const DirectMailService = require('node-aliyun-dms');
const aliyun_1 = require("./aliyun");
class BaseEmailService {
    static sendHtmlEmail(toAddress, fromAlias, subject, htmlBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let dms = new DirectMailService({
                    'accessid': aliyun_1.Aliyun.ACCESS_ID,
                    'accesskey': aliyun_1.Aliyun.ACCESS_SECRET
                });
                dms.sendSingleMail('gago@gagodata.cn', true, 0, toAddress, fromAlias, subject, BaseEmailService.escapeInvalidChars_(htmlBody), undefined, (error, res) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(res['RequestId']);
                    }
                });
            });
        });
    }
    static sendChangelog(toAddresses, fromAlias, subject, changelogPath, tmpFilePath) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastVersion = undefined;
            const versionFilePath = tmpFilePath;
            if (fs.existsSync(versionFilePath)) {
                lastVersion = fs.readFileSync(versionFilePath, 'utf8');
            }
            const packageJson = require(path.resolve('./package.json'));
            const currentVersion = String(packageJson.version);
            if (currentVersion === lastVersion) {
                return;
            }
            fs.writeFileSync(versionFilePath, packageJson.version, 'utf8');
            const converter = new Showdown.Converter();
            let dataSourceMdContent = fs.readFileSync(changelogPath, 'utf8');
            dataSourceMdContent = dataSourceMdContent.replace(/\(/g, '（');
            dataSourceMdContent = dataSourceMdContent.replace(/\)/g, '）');
            const dataSourceMarkdownHtml = converter.makeHtml(dataSourceMdContent);
            const toAddress = toAddresses.join(',');
            const htmlBody = `<html>
        <p><strong>此邮件为机器生成，请勿回复</strong></p>
        ${dataSourceMarkdownHtml}
       </html>`;
            return yield BaseEmailService.sendHtmlEmail(toAddress, fromAlias, subject, htmlBody);
        });
    }
    static escapeInvalidChars_(content) {
        let escapedContent = content.replace(/\(/g, '（');
        escapedContent = escapedContent.replace(/\)/g, '）');
        return escapedContent;
    }
}
exports.BaseEmailService = BaseEmailService;

//# sourceMappingURL=baseemailservice.js.map
