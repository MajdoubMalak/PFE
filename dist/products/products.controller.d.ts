import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    getProducts(prodId: string): Promise<import("./products.model").Product>;
    updateProduct(prodId: string, prodtitle: string, prodDesc: string, prodprice: number): Promise<any>;
    deleteProduct(prodId: string): Promise<any>;
}
