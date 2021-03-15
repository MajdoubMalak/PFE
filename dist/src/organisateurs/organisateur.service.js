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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisatorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const auth_service_1 = require("../auth/auth.service");
const email_service_1 = require("../email/email.service");
let OrganisatorService = class OrganisatorService {
    constructor(organisatorModel, authService) {
        this.organisatorModel = organisatorModel;
        this.authService = authService;
    }
    async AddOrganisator(username, email, password, company, region, category, phoneNumber, age) {
        const usernameexist = await this.organisatorModel.findOne({ username: username }).exec();
        const useremailexist = await this.organisatorModel.findOne({ email: email }).exec();
        const userphoneexist = await this.organisatorModel.findOne({ phoneNumber: phoneNumber }).exec();
        if (usernameexist) {
            return await " user name exist !";
        }
        else if (useremailexist) {
            return await " user email exist !";
        }
        else if (userphoneexist) {
            return await " user phone number exist !";
        }
        else {
            const newOrganisator = new this.organisatorModel({
                username: username,
                email: email.toLowerCase(),
                password: password,
                company: company,
                region: region,
                category: category,
                phoneNumber: phoneNumber,
                age: age
            });
            const hashed = await this.authService.hashPassword(newOrganisator.password);
            newOrganisator.password = hashed;
            console.log(newOrganisator);
            newOrganisator.save();
            return newOrganisator;
        }
    }
};
OrganisatorService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Organisateur')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        auth_service_1.AuthService])
], OrganisatorService);
exports.OrganisatorService = OrganisatorService;
//# sourceMappingURL=organisateur.service.js.map