"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
let EmailService = class EmailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendemail(username, usermail, code) {
        const paramusername = username;
        const paramusermail = usermail;
        const paramcode = code;
        this
            .mailerService
            .sendMail({
            to: paramusermail,
            from: 'noreply@nestjs.com',
            subject: 'Testing Nest MailerModule ✔',
            html: '<b>welcome to our EventApp</b> ' + `${paramusername}` + '<b>votre code est: <b>' + `${paramcode}`,
        })
            .then(() => { })
            .catch(() => { });
    }
};
EmailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map