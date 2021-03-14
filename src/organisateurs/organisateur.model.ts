import * as mongoose from 'mongoose';
import {Document} from 'mongoose';


export const OrganisateurSchema = new mongoose.Schema({
region: { type:String, required: true},
societe:{type:String, required: true},
type: {type:String, required: true},

});

export interface Organisateur extends Document {
    id: string;
    region: string;
    societe: string;
    type: string;
}