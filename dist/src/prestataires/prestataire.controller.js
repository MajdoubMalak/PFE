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
exports.PrestataireController = void 0;
const common_1 = require("@nestjs/common");
const prestaire_service_1 = require("./prestaire.service");
let PrestataireController = class PrestataireController {
    constructor(prestataireService) {
        this.prestataireService = prestataireService;
    }
    async addProduct(prodTitle, prodDesc, prodPrice) {
        const generatedId = await this.prestataireService.insertPrestataire(prodTitle, prodDesc, prodPrice);
        return { id: generatedId };
    }
    async getAllProducts() {
        const result = await this.prestataireService.getAllPrestataire();
        return result.map(prod => ({
            id: prod.id,
            title: prod.title,
            description: prod.description,
            price: prod.price,
        }));
    }
    async updateProduct(prodId, prodtitle, prodDesc, prodprice) {
        await this.prestataireService.updateProduct(prodId, prodtitle, prodDesc, prodprice);
        return null;
    }
    async deleteProduct(prodId) {
        await this.prestataireService.deleteProduct(prodId);
        return null;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('title')),
    __param(1, common_1.Body('description')),
    __param(2, common_1.Body('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], PrestataireController.prototype, "addProduct", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrestataireController.prototype, "getAllProducts", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body('title')), __param(2, common_1.Body('description')), __param(3, common_1.Body('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], PrestataireController.prototype, "updateProduct", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrestataireController.prototype, "deleteProduct", null);
PrestataireController = __decorate([
    common_1.Controller('prestataire'),
    __metadata("design:paramtypes", [prestaire_service_1.PrestataireService])
], PrestataireController);
exports.PrestataireController = PrestataireController;
//# sourceMappingURL=prestataire.controller.js.map