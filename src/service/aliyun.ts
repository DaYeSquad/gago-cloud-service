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
  static ENTERPRISE_ID: string = '1917856451201954';

  /**
   * 阿里云产品的 access id
   * @type {string}
   */
  static ACCESS_ID: string = 'LTAIbuVHTjdhr0Nz';

  /**
   * 阿里云产品的 access secret
   * @type {string}
   */
  static ACCESS_SECRET: string = '6obMhpcupEB8J287J2QG7EiCJTe4lj';

  /**
   * 阿里云存储 OSS 的地区
   * @type {string}
   */
  static OSS_REGION: string = 'oss-cn-beijing';

  /**
   * 返回一个 alioss 的对象
   */
  static getOssClient(bucket?: string): any {
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
