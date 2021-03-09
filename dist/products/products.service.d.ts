import { Model } from 'mongoose';
import { Product } from './products.model';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<string>;
    getAllProducts(): Promise<Product[]>;
    getSingleProduct(id: string): Promise<Product>;
    updateProduct(id: string, title: string, description: string, price: number): Promise<void>;
    deleteProduct(id: string): Promise<void>;
    findProduct(id: string): Promise<Product>;
}
