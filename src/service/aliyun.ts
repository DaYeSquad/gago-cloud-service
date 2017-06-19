// Copyright 2016 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.

const OSS = require('ali-oss');

/**
 * 阿里云的相关参数
 * 注意: 该文档请用中文注释以对应阿里云的名词
 */
export class Aliyun {
  static ossClient_: any;

  /**
   * 企业别名
   * @type {string} 企业别名
   */
  static ENTERPRISE_ID: string = null; // = '1917856451201954';

  /**
   * 阿里云产品的 access id
   * @type {string}
   */
  static ACCESS_ID: string = null; // 'LTAIbuVHTjdhr0Nz';

  /**
   * 阿里云产品的 access secret
   * @type {string}
   */
  static ACCESS_SECRET: string = null; // '6obMhpcupEB8J287J2QG7EiCJTe4lj';

  /**
   * 阿里云存储 OSS 的地区
   * @type {string}
   */
  static OSS_REGION: string = null; // 'oss-cn-beijing';

  /**
   * 返回一个 alioss 的对象
   */
  static getOssClient(bucket?: string): any {
    Aliyun.verificationOssConfig();
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
  static setConfig(config?: string): void;
  static setConfig(config: AliyunConfig): void;
  static setConfig(config?: any): void {
    if (config instanceof AliyunConfig) {
      Aliyun.ENTERPRISE_ID = config.enterpriseId;
      Aliyun.ACCESS_ID = config.accessId;
      Aliyun.ACCESS_SECRET = config.accessSecret;
      Aliyun.OSS_REGION = config.ossRegion;
    }else {
      Aliyun.ENTERPRISE_ID = process.env['ENTERPRISE_ID'];
      Aliyun.ACCESS_ID = process.env['ACCESS_ID'];
      Aliyun.ACCESS_SECRET = process.env['ACCESS_SECRET'];
      Aliyun.OSS_REGION = process.env['OSS_REGION'];
    }
  }
  static verificationConfig(): void {
    if (Aliyun.ENTERPRISE_ID === undefined || Aliyun.ENTERPRISE_ID === null || Aliyun.ENTERPRISE_ID.length === 0) {
      throw new Error('GET_OSS_CLIENT_ERROR_ENTERPRISE_ID');
    }
    Aliyun.verificationOssConfig();
  }
  static verificationOssConfig(): void {
    if (Aliyun.ACCESS_ID === undefined || Aliyun.ACCESS_ID === null || Aliyun.ACCESS_ID.length === 0) {
      throw new Error('GET_OSS_CLIENT_ERROR_ACCESS_ID');
    }
    if (Aliyun.ACCESS_SECRET === undefined || Aliyun.ACCESS_SECRET === null || Aliyun.ACCESS_SECRET.length === 0) {
      throw new Error('GET_OSS_CLIENT_ERROR_ACCESS_SECRET');
    }
    if (Aliyun.OSS_REGION === undefined || Aliyun.OSS_REGION === null || Aliyun.OSS_REGION.length === 0) {
      throw new Error('GET_OSS_CLIENT_ERROR_OSS_REGION');
    }
  }
}

export class AliyunConfig {
  enterpriseId: string;
  accessId: string;
  accessSecret: string;
  ossRegion: string;

  constructor(enterpriseId: string, accessId: string, accessSecret: string, ossRegion: string) {
    this.enterpriseId = enterpriseId;
    this.accessId = accessId;
    this.accessSecret = accessSecret;
    this.ossRegion = ossRegion;
  }

}
