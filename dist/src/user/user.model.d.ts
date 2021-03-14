import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare enum UserRole {
    ADMIN = "admin",
    PARTI = "particulier",
    ORGA = "organisateur",
    PRESTA = "prestataire"
}
export declare type UserDocument = User & Document;
export declare class User {
    username: string;
    email: string;
    password: string;
    gender: string;
    profilePicture: string;
    phoneNumber: string;
    age: number;
    role: string;
    codeNumber: number;
    activated: boolean;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User>, undefined>;
export interface User extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
    gender: string;
    profilePicture: string;
    phoneNumber: string;
    age: number;
    role: string;
    codeNumber: number;
    activated: boolean;
}
