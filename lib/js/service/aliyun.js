"use strict";
const OSS = require('ali-oss');
class Aliyun {
    static getOssClient(bucket) {
        if (!Aliyun.ossClient_) {
            Aliyun.ossClient_ = new OSS({
                region: Aliyun.OSS_REGION,
                accessKeyId: Aliyun.ACCESS_ID,
                accessKeySecret: Aliyun.ACCESS_SECRET
            });
        }
        Aliyun.ossClient_.useBucket(bucket);
        return Aliyun.ossClient_;
    }
}
Aliyun.ENTERPRISE_ID = '1917856451201954';
Aliyun.ACCESS_ID = 'LTAIbuVHTjdhr0Nz';
Aliyun.ACCESS_SECRET = '6obMhpcupEB8J287J2QG7EiCJTe4lj';
Aliyun.OSS_REGION = 'oss-cn-beijing';
exports.Aliyun = Aliyun;

//# sourceMappingURL=aliyun.js.map
