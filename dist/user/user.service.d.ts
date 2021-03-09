import { User } from './user.model';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
export declare class UserService {
    private readonly userModel;
    private authService;
    constructor(userModel: Model<User>, authService: AuthService);
    AddUser(username: string, email: string, password: string, gender: string, profilepicture: string, phoneNumber: string, age: number): Promise<string>;
    getAllUsers(): Promise<User[]>;
    getSingleUser(id: string): Promise<User>;
    updateUser(id: string, username: string, email: string, profilepicture: string, phoneNumber: string, gender: string, age: number): Promise<void>;
    updateprofilepic(id: string, profilepicture: string): Promise<void>;
    deleteUser(id: string): Promise<void>;
    findUser(id: string): Promise<User>;
    Login(username: string, password: string): Promise<any>;
}
