"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const aliyun_1 = require("./aliyun");
const co = require('co');
class BoxService {
    static uploadFileToOss(filePath, bucket, objectKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let ossClient = aliyun_1.Aliyun.getOssClient(bucket);
                co(function* () {
                    const result = yield ossClient.put(objectKey, filePath);
                    resolve(result['res']['statusCode']);
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    }
    static downloadFileToOss(bucket, objectKey, localPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                co(function* () {
                    let ossClient = aliyun_1.Aliyun.getOssClient(bucket);
                    const result = yield ossClient.get(objectKey, localPath);
                    resolve(result['res']['statusCode']);
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    }
}
exports.BoxService = BoxService;

//# sourceMappingURL=boxservice.js.map
