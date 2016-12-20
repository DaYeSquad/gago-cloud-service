export declare class BaseEmailService {
    static sendHtmlEmail(toAddress: string, fromAlias: string, subject: string, htmlBody: string): Promise<string>;
    static sendChangelog(toAddresses: string[], fromAlias: string, subject: string, changelogPath: string, tmpFilePath: string): Promise<string>;
    static escapeInvalidChars_(content: string): string;
}
