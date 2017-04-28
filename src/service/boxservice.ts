// Copyright 2016 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.

import {Aliyun} from './aliyun';
import {OssFile, OssQuery, OssListOptions, OssSignatureUrlOptions} from '../module/ossfile';

const co = require('co');

/**
 * Provides base services for ali-oss.
 */
export class BoxService {

  // -------------------------------------------------------------------------
  // aliyun
  // -------------------------------------------------------------------------

  /**
   * Upload file to ali-oss.
   * @param filePath Local file path.
   * @param bucket Bucket name.
   * @param objectKey Object key used in ali-oss.
   * @returns {Promise<number>} Status code, should be 200 if success.
   */
  static async uploadFileToOss(filePath: string, bucket: string, objectKey: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      let ossClient: any = Aliyun.getOssClient(bucket);

      co(function* () {
        const result: any = yield ossClient.put(objectKey, filePath);

        /* result is like below (2016-11-2)
         {
         "name": "test2.csv",
         "url": "http://gago-stations-origin.oss-cn-beijing.aliyuncs.com/test2.csv",
         "res": {
         "status": 200,
         "statusCode": 200,
         "headers": {
         "server": "AliyunOSS",
         "date": "Wed, 02 Nov 2016 04:54:59 GMT",
         "content-length": "0",
         "connection": "keep-alive",
         "x-oss-request-id": "581971A218EA5E633263D327",
         "etag": "\"58DC34B718317802B48030B889167E9B\"",
         "x-oss-hash-crc64ecma": "3065663235719610447",
         "content-md5": "WNw0txgxeAK0gDC4iRZ+mw==",
         "x-oss-server-time": "16"
         },
         "size": 0,
         "aborted": false,
         "rt": 508,
         "keepAliveSocket": false,
         "data": {
         "type": "Buffer",
         "data": []
         },
         "requestUrls": [
         "http://gago-stations-origin.oss-cn-beijing.aliyuncs.com/test2.csv"
         ],
         "timing": null,
         "remoteAddress": "101.201.182.226",
         "remotePort": 80
         }
         }
         */
        resolve(result['res']['statusCode']);
      }).catch(function (err: any) {
        reject(err);
      });
    });
  }

  /**
   * Download file to ali-oss.
   * @param localPath Download file save localPath.
   * @param bucket Bucket name.
   * @param objectKey Object key used in ali-oss.
   * @returns {Promise<number>} Status code, should be 200 if success or 500 fail.
   */
  static async downloadFileToOss(bucket: string, objectKey: string, localPath: string): Promise<any> {
    return new Promise<number>((resolve, reject) => {
      co(function* () {
        let ossClient: any = Aliyun.getOssClient(bucket);
        const result: any = yield ossClient.get(objectKey, localPath);
        resolve(result['res']['statusCode']);
      }).catch(function (err: any) {
        reject(err);
      });
    });
  }

  /**
   * public bucket. get object url
   * @param baseUrl
   * @param bucket Bucket name.
   * @param objectKey Object key used in ali-oss.
   * @returns {Promise<string>}
   */
  static async getObjectUrl(bucket: string, objectKey: string, baseUrl?: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        let ossClient: any = Aliyun.getOssClient(bucket);
        const url: string = ossClient.getObjectUrl(objectKey);
        resolve(url);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * public bucket. get object url
   * @param objectKey Object key used in ali-oss.
   * @param bucket Bucket name.
   * @param optionss # see ali-oss docs.
   * @returns {Promise<string>}
   */
  static async signatureUrl(bucket: string, objectKey: string, options?: OssSignatureUrlOptions): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        let ossClient: any = Aliyun.getOssClient(bucket);
        const url: string = ossClient.signatureUrl(objectKey);
        resolve(url);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * bucket objects
   * @param bucket Bucket name.
   * @param query{
   *  prefix: string,
   *  marker: string,
   *  delimiter: string,
   *  max-keys: string|number,
   * } # see ali-oss docs
   * @param options{
   *  timeout: number
   * } # see ali-oss docs
   *
   * @returns {Promise<any>}
   */
  static async list(bucket: string, query?: OssQuery, options?: OssListOptions): Promise<OssFile[]> {
    return new Promise<OssFile[]>((resolve, reject) => {
      try {
        let ossClient: any = Aliyun.getOssClient(bucket);
        co(function* () {
          const fileList: any = yield ossClient.list(query.toJSON(), options);
          resolve(fileList['objects'] as OssFile[]);
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
