"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisateurModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("../auth/auth.module");
const email_module_1 = require("../email/email.module");
const organisateur_controller_1 = require("./organisateur.controller");
const organisateur_model_1 = require("./organisateur.model");
const organisateur_service_1 = require("./organisateur.service");
let OrganisateurModule = class OrganisateurModule {
};
OrganisateurModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Organisateur', schema: organisateur_model_1.OrganisatorSchema }]),
            email_module_1.EmailModule,
            auth_module_1.AuthModule],
        providers: [organisateur_service_1.OrganisatorService],
        controllers: [organisateur_controller_1.OrganisatorController],
        exports: [organisateur_service_1.OrganisatorService]
    })
], OrganisateurModule);
exports.OrganisateurModule = OrganisateurModule;
//# sourceMappingURL=organisateur.module.js.map