import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare const OrganisateurSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>, undefined>;
export interface Organisateur extends Document {
    id: string;
    region: string;
    societe: string;
    type: string;
}
