// Copyright 2016 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.

const OSS = require('ali-oss');

/**
 * 阿里云的相关参数
 * 注意: 该文档请用中文注释以对应阿里云的名词
 *
 * Usage:
 *  Aliyun.setConfig(config);
 *  let ossClient: any = Aliyun.getOssClient('gago-data');
 */
export class Aliyun {
  static ossClient_: any;

  /**
   * 企业别名
   * @type {string} 企业别名
   */
  static ENTERPRISE_ID: string | undefined = undefined;

  /**
   * 阿里云产品的 access id
   * @type {string}
   */
  static ACCESS_ID: string | undefined = undefined;

  /**
   * 阿里云产品的 access secret
   * @type {string}
   */
  static ACCESS_SECRET: string | undefined = undefined;

  /**
   * 阿里云存储 OSS 的地区
   * @type {string}
   */
  static OSS_REGION: string | undefined = undefined;

  /**
   * 返回一个 alioss 的对象
   */
  static getOssClient(bucket?: string): any {
    Aliyun.verifyConfig_();

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

  /**
   * 传入AliyunConfigOptions实例,初始化阿里云账号密码配置
   * @param config AliyunConfigOptions
   * @returns void
   */
  static setConfig(config: AliyunConfigOptions): void {
    Aliyun.ENTERPRISE_ID = config.enterpriseId;
    Aliyun.ACCESS_ID = config.accessId;
    Aliyun.ACCESS_SECRET = config.accessSecret;
    Aliyun.OSS_REGION = config.ossRegion;
  }

  /**
   * 只校验所有阿里云Oss账号密码配置
   * @returns void
   * @private
   */
  private static verifyConfig_(): void {
    if (!Aliyun.ACCESS_ID) {
      throw new Error('GET_OSS_CLIENT_ERROR_ACCESS_ID');
    }
    if (!Aliyun.ACCESS_SECRET) {
      throw new Error('GET_OSS_CLIENT_ERROR_ACCESS_SECRET');
    }
    if (!Aliyun.OSS_REGION) {
      throw new Error('GET_OSS_CLIENT_ERROR_OSS_REGION');
    }
    if (!Aliyun.ENTERPRISE_ID) {
      throw new Error('GET_OSS_CLIENT_ERROR_ENTERPRISE_ID');
    }
  }
}

/**
 * 阿里云账号密码配置
 */
export interface AliyunConfigOptions {
  enterpriseId: string;
  accessId: string;
  accessSecret: string;
  ossRegion: string;
}

