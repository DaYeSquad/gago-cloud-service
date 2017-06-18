export declare class Aliyun {
    static ossClient_: any;
    static ENTERPRISE_ID: string;
    static ACCESS_ID: string;
    static ACCESS_SECRET: string;
    static OSS_REGION: string;
    static getOssClient(bucket?: string): any;
    static setConfig(config?: string): void;
    static setConfig(config: AliyunConfig): void;
    static verificationConfig(): void;
    static verificationOssConfig(): void;
}
export declare class AliyunConfig {
    enterpriseId: string;
    accessId: string;
    accessSecret: string;
    ossRegion: string;
    constructor(enterpriseId: string, accessId: string, accessSecret: string, ossRegion: string);
}
