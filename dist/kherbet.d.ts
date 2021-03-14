import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare enum UserRole {
    ADMIN = "admin",
    PARTI = "particulier",
    ORGA = "organisateur",
    PRESTA = "prestataire"
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>, undefined>;
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
