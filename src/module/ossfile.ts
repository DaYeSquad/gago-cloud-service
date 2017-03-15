// Copyright (c) 2016 (jw872505975@gmail.com). All rights reserved.
export interface OssFile {
  name: string;
  url: string;
  lastModified: string;
  size: number;
}

export class OssQuery {
  prefix: string;
  marker: string;
  delimiter: string;
  maxKeys: string|number;

  toJSON () {
    return {
      'prefix': this.prefix,
      'marker': this.marker,
      'delimiter': this.delimiter,
      'max-keys': this.maxKeys
      };
  }
}

export interface OssListOptions {
  timeout: number;
}
export interface OssSignatureUrlOptions {
  expires: number;
  method: string;
  process: string;
  response: OssSignatureUrlOptionsResponse;
}

export class OssSignatureUrlOptionsResponse {
  contentType: string;
  contentDisposition: string;
  cacheControl: string;
  toJSON () {
    return {
      'content-type': this.contentType,
      'content-disposition': this.contentDisposition,
      'cache-control': this.cacheControl
    };
  }
}