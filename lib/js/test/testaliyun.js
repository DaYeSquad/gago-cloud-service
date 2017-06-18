"use strict";
const chai = require("chai");
const aliyun_1 = require("../service/aliyun");
describe("Aliyun ", () => {
    it("Test getOssClient() AliyunConfig", () => {
        let config = new aliyun_1.AliyunConfig("123456", "test_accessKeyId", "test_accessKeySecret", "test_region");
        aliyun_1.Aliyun.setConfig(config);
        let ossClient = aliyun_1.Aliyun.getOssClient("gago-data");
        chai.expect(ossClient["options"]["region"]).to.equal("test_region");
        chai.expect(ossClient["options"]["accessKeyId"]).to.equal("test_accessKeyId");
        chai.expect(ossClient["options"]["accessKeySecret"]).to.equal("test_accessKeySecret");
    });
    it("Test getOssClient() ENV", () => {
        process.env["ENTERPRISE_ID"] = "123456";
        process.env["OSS_REGION"] = "test_region";
        process.env["ACCESS_ID"] = "test_accessKeyId";
        process.env["ACCESS_SECRET"] = "test_accessKeySecret";
        aliyun_1.Aliyun.setConfig();
        let ossClient = aliyun_1.Aliyun.getOssClient("gago-data");
        chai.expect(ossClient["options"]["region"]).to.equal("test_region");
        chai.expect(ossClient["options"]["accessKeyId"]).to.equal("test_accessKeyId");
        chai.expect(ossClient["options"]["accessKeySecret"]).to.equal("test_accessKeySecret");
    });
});

//# sourceMappingURL=testaliyun.js.map
