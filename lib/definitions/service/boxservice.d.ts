export declare class BoxService {
    static uploadFileToOss(filePath: string, bucket: string, objectKey: string): Promise<number>;
    static downloadFileToOss(bucket: string, objectKey: string, localPath: string): Promise<any>;
}
