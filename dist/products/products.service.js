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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async insertProduct(title, desc, price) {
        const newProduct = new this.productModel({
            title: title, description: desc, price: price
        });
        const result = await newProduct.save();
        console.log(result);
        return result.id;
    }
    async getAllProducts() {
        const result = await this.productModel.find().exec();
        console.log(result);
        return result;
    }
    async getSingleProduct(id) {
        const product = await this.findProduct(id);
        if (!product) {
            throw new common_1.NotFoundException('could not find the product');
        }
        return product;
    }
    async updateProduct(id, title, description, price) {
        const updatedproduct = await this.findProduct(id);
        if (title) {
            updatedproduct.title = title;
        }
        if (description) {
            updatedproduct.description = description;
        }
        if (price) {
            updatedproduct.price = price;
        }
        updatedproduct.save();
    }
    async deleteProduct(id) {
        const result = await this.productModel.deleteOne({ _id: id }).exec();
        console.log(result);
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not be deleted');
        }
    }
    async findProduct(id) {
        let product;
        try {
            product = await this.productModel.findById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find product');
        }
        return product;
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map