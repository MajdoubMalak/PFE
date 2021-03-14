import { User } from './user.model';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { EmailService } from 'src/email/email.service';
export declare class UserService {
    private readonly userModel;
    private authService;
    private emailService;
    constructor(userModel: Model<User>, authService: AuthService, emailService: EmailService);
    AddUser(username: string, email: string, password: string, gender: string, profilepicture: string, phoneNumber: string, age: number): Promise<string>;
    getAllUsers(): Promise<User[]>;
    getSingleUser(id: string): Promise<User>;
    updateUser(id: string, username: string, email: string, phoneNumber: string, gender: string, age: number): Promise<void>;
    updateprofilepic(id: string, profilepicture: string): Promise<void>;
    updateCodeNumber(id: string, codenumber: number): Promise<void>;
    deleteUser(id: string): Promise<void>;
    findUser(id: string): Promise<User>;
    Login(username: string, password: string): Promise<any>;
    checkEmailAccount(id: string): Promise<any>;
    activateAccount(id: string, codeNumber: number): Promise<"account activated" | "wrong code">;
}
