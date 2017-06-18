"use strict";
const OSS = require('ali-oss');
class Aliyun {
    static getOssClient(bucket) {
        if (Aliyun.ENTERPRISE_ID === undefined || Aliyun.ENTERPRISE_ID === null || Aliyun.ENTERPRISE_ID.length === 0) {
            throw new Error("GET_OSS_CLIENT_ERROR_ENTERPRISE_ID");
        }
        if (Aliyun.ACCESS_ID === undefined || Aliyun.ACCESS_ID === null || Aliyun.ACCESS_ID.length === 0) {
            throw new Error("GET_OSS_CLIENT_ERROR_ACCESS_ID");
        }
        if (Aliyun.ACCESS_SECRET === undefined || Aliyun.ACCESS_SECRET === null || Aliyun.ACCESS_SECRET.length === 0) {
            throw new Error("GET_OSS_CLIENT_ERROR_ACCESS_SECRET");
        }
        if (Aliyun.OSS_REGION === undefined || Aliyun.OSS_REGION === null || Aliyun.OSS_REGION.length === 0) {
            throw new Error("GET_OSS_CLIENT_ERROR_OSS_REGION");
        }
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
    static setConfig(config) {
        Aliyun.ENTERPRISE_ID = config.enterpriseId;
        Aliyun.ACCESS_ID = config.accessId;
        Aliyun.ACCESS_SECRET = config.accessSecret;
        Aliyun.OSS_REGION = config.ossRegion;
    }
}
Aliyun.ENTERPRISE_ID = null;
Aliyun.ACCESS_ID = null;
Aliyun.ACCESS_SECRET = null;
Aliyun.OSS_REGION = null;
exports.Aliyun = Aliyun;
class AliyunConfig {
    constructor(enterpriseId, accessId, accessSecret, ossRegion) {
        this.enterpriseId = enterpriseId;
        this.accessId = accessId;
        this.accessSecret = accessSecret;
        this.ossRegion = ossRegion;
    }
}
exports.AliyunConfig = AliyunConfig;

//# sourceMappingURL=aliyun.js.map
