import { OssFile } from "../module/ossfile";
export declare class BoxService {
    static uploadFileToOss(filePath: string, bucket: string, objectKey: string): Promise<number>;
    static downloadFileToOss(bucket: string, objectKey: string, localPath: string): Promise<any>;
    static getObjectUrl(bucket: string, objectKey: string, baseUrl?: string): Promise<string>;
    static signatureUrl(bucket: string, objectKey: string, options?: any): Promise<string>;
    static list(bucket: string, query?: any, options?: any): Promise<OssFile[]>;
}
