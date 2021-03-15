import { Document } from 'mongoose';
export declare enum UserRole {
    ADMIN = "admin",
    PARTI = "particulier",
    ORGA = "organisateur",
    PRESTA = "prestataire"
}
export declare type OrganisatorDocument = Organisator & Document;
export declare class Organisator {
    username: string;
    email: string;
    password: string;
    company: string;
    region: string;
    category: string;
    phoneNumber: string;
    age: number;
    rank: number;
    profilePicture: string;
    role: string;
    codeNumber: number;
    activated: boolean;
}
export declare const OrganisatorSchema: import("mongoose").Schema<Organisator, import("mongoose").Model<Organisator>, undefined>;
export interface Organisator extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
    company: string;
    region: string;
    category: string;
    rank: number;
    profilePicture: string;
    phoneNumber: string;
    age: number;
    role: string;
    codeNumber: number;
    activated: boolean;
}
