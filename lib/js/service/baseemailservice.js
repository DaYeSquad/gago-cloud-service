"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
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
                dms.sendSingleMail('gago@gagodata.cn', true, 0, toAddress, fromAlias, subject, htmlBody, undefined, (error, res) => {
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
}
exports.BaseEmailService = BaseEmailService;

//# sourceMappingURL=baseemailservice.js.map
