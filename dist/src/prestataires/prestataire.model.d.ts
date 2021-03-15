import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare const PrestataireSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>, undefined>;
export interface Prestataire extends Document {
    id: string;
    title: string;
    description: string;
    price: number;
}
