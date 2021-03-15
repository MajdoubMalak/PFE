import { Model } from 'mongoose';
import { Prestataire } from './prestataire.model';
export declare class PrestataireService {
    private readonly prestataireModel;
    constructor(prestataireModel: Model<Prestataire>);
    insertPrestataire(title: string, desc: string, price: number): Promise<string>;
    getAllPrestataire(): Promise<Prestataire[]>;
    getSinglePrestataire(id: string): Promise<Prestataire>;
    updateProduct(id: string, title: string, description: string, price: number): Promise<void>;
    deleteProduct(id: string): Promise<void>;
    findProduct(id: string): Promise<Prestataire>;
}
