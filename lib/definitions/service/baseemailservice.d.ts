export declare class BaseEmailService {
    static sendHtmlEmail(toAddress: string, fromAlias: string, subject: string, htmlBody: string): Promise<string>;
}
