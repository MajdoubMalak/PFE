import * as mongoose from 'mongoose';
import {Document} from 'mongoose';
export enum UserRole{
    ADMIN= 'admin',
    PARTI= 'particulier',
    ORGA= 'organisateur',
    PRESTA= "prestataire"
}
export const UserSchema = new mongoose.Schema({
username: { type:String, required: true},
email:{type:String, required: true},
password: {type:String, required: true},
gender: {type:String, required: true},
profilePicture: {type:String, required: true},
phoneNumber: {type:String, required: true},
age:{ type:Number, required: true},
role: {type: String,  required: true, default: UserRole.PARTI},
codeNumber: {type: Number, required: true, default: -1},
activated: {type: Boolean, required: true, default:false},
});

export interface User extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
    gender: string;
    profilePicture: string;
    phoneNumber: string;
    age: number;
    role: UserRole;
    codeNumber: number;
    activated: boolean;

}