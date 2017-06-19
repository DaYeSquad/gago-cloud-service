/**
 * Created by jiangwei on 2017/6/18.
 * Copyright (c) 2017 (jw872505975@gmail.com). All rights reserved.
 */
import * as chai from "chai";
import {Aliyun, AliyunConfig} from "../service/aliyun";

describe("Aliyun ", () => {
  it("Test getOssClient() AliyunConfig", () => {
    let config: AliyunConfig = new AliyunConfig("123456", "test_accessKeyId", "test_accessKeySecret", "test_region");
    Aliyun.setConfig(config);
    let ossClient: any = Aliyun.getOssClient("gago-data");
    chai.expect(ossClient["options"]["region"]).to.equal("test_region");
    chai.expect(ossClient["options"]["accessKeyId"]).to.equal("test_accessKeyId");
    chai.expect(ossClient["options"]["accessKeySecret"]).to.equal("test_accessKeySecret");
  });
  it("Test getOssClient() ENV", () => {
    process.env["ENTERPRISE_ID"] = "123456";
    process.env["OSS_REGION"] = "test_region";
    process.env["ACCESS_ID"] = "test_accessKeyId";
    process.env["ACCESS_SECRET"] = "test_accessKeySecret";
    Aliyun.setConfig();
    let ossClient: any = Aliyun.getOssClient("gago-data");
    chai.expect(ossClient["options"]["region"]).to.equal("test_region");
    chai.expect(ossClient["options"]["accessKeyId"]).to.equal("test_accessKeyId");
    chai.expect(ossClient["options"]["accessKeySecret"]).to.equal("test_accessKeySecret");
  });
});
