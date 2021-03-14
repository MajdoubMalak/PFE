import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendemail(username: string, usermail: string, code: number): Promise<void>;
}
