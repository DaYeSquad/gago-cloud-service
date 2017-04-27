export interface OssFile {
    name: string;
    url: string;
    lastModified: string;
    size: number;
}
export declare class OssQuery {
    prefix: string;
    marker: string;
    delimiter: string;
    maxKeys: string | number;
    toJSON(): {
        'prefix': string;
        'marker': string;
        'delimiter': string;
        'max-keys': string | number;
    };
}
export declare class OssListOptions {
    timeout: number;
}
export interface OssSignatureUrlOptions {
    expires: number;
    method: string;
    process: string;
    response: OssSignatureUrlOptionsResponse;
}
export declare class OssSignatureUrlOptionsResponse {
    contentType: string;
    contentDisposition: string;
    cacheControl: string;
    toJSON(): {
        'content-type': string;
        'content-disposition': string;
        'cache-control': string;
    };
}
