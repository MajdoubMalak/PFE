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
exports.OrganisatorSchema = exports.Organisator = exports.UserRole = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["PARTI"] = "particulier";
    UserRole["ORGA"] = "organisateur";
    UserRole["PRESTA"] = "prestataire";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let Organisator = class Organisator {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Organisator.prototype, "username", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Organisator.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Organisator.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Organisator.prototype, "company", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Organisator.prototype, "region", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Organisator.prototype, "category", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Organisator.prototype, "phoneNumber", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Organisator.prototype, "age", void 0);
__decorate([
    mongoose_1.Prop({ required: false, default: 0 }),
    __metadata("design:type", Number)
], Organisator.prototype, "rank", void 0);
__decorate([
    mongoose_1.Prop({ required: false, default: "null" }),
    __metadata("design:type", String)
], Organisator.prototype, "profilePicture", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: UserRole.ORGA }),
    __metadata("design:type", String)
], Organisator.prototype, "role", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: -1 }),
    __metadata("design:type", Number)
], Organisator.prototype, "codeNumber", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Organisator.prototype, "activated", void 0);
Organisator = __decorate([
    mongoose_1.Schema()
], Organisator);
exports.Organisator = Organisator;
exports.OrganisatorSchema = mongoose_1.SchemaFactory.createForClass(Organisator);
//# sourceMappingURL=organisateur.model.js.map