import { PrestataireService } from './prestaire.service';
export declare class PrestataireController {
    private readonly prestataireService;
    constructor(prestataireService: PrestataireService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    updateProduct(prodId: string, prodtitle: string, prodDesc: string, prodprice: number): Promise<any>;
    deleteProduct(prodId: string): Promise<any>;
}
