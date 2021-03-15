"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestataireModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const prestaire_service_1 = require("./prestaire.service");
const prestataire_controller_1 = require("./prestataire.controller");
const prestataire_model_1 = require("./prestataire.model");
let PrestataireModule = class PrestataireModule {
};
PrestataireModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Prestataire', schema: prestataire_model_1.PrestataireSchema }])],
        controllers: [prestataire_controller_1.PrestataireController],
        providers: [prestaire_service_1.PrestataireService],
    })
], PrestataireModule);
exports.PrestataireModule = PrestataireModule;
//# sourceMappingURL=prestataire.module.js.map