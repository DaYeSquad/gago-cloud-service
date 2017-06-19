// Copyright (c) 2016 (jw872505975@gmail.com). All rights reserved.

/**
 * 阿里云Oss文件类
 */
export interface OssFile {
  name: string;
  url: string;
  lastModified: string;
  size: number;
}

/**
 * 阿里云Oss client.list()方法query类
 */
export class OssQuery {
  prefix: string;
  marker: string;
  delimiter: string;
  maxKeys: string|number;

  toJSON() {
    return {
      'prefix': this.prefix,
      'marker': this.marker,
      'delimiter': this.delimiter,
      'max-keys': this.maxKeys
      };
  }
}

/**
 * 阿里云Oss client.list()方法参数options的类
 */
export class OssListOptions {
  timeout: number;
}

/**
 * 阿里云Oss client.signatureUrl()方法参数options的类
 */
export interface OssSignatureUrlOptions {
  expires: number;
  method: string;
  process: string;
  response: OssSignatureUrlOptionsResponse;
}

/**
 * 阿里云Oss client.list()方法参数options的Response的类
 */
export class OssSignatureUrlOptionsResponse {
  contentType: string;
  contentDisposition: string;
  cacheControl: string;
  toJSON() {
    return {
      'content-type': this.contentType,
      'content-disposition': this.contentDisposition,
      'cache-control': this.cacheControl
    };
  }
}