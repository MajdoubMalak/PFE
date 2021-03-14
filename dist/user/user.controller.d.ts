import { EmailService } from 'src/email/email.service';
import { User } from './user.model';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    private emailService;
    constructor(userService: UserService, emailService: EmailService);
    addUser(username: string, useremail: string, userpassword: string, usergender: string, userprofilepic: string, userphonenumber: string, userage: number): Promise<string>;
    Login(username: string, password: string): Promise<any>;
    getAllUsers(): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        gender: string;
        profilepicture: string;
        phoneNumber: string;
        age: number;
    }[]>;
    checkEmailAccount(userId: string): Promise<any>;
    getUser(userId: string): Promise<User>;
    updateUser(userId: string, username: string, useremail: string, usergender: string, userprofilepic: string, userphonenumber: string, userage: number): Promise<any>;
    activateAccount(userId: string, codeNumber: number): Promise<"account activated" | "wrong code">;
    deleteUser(userId: string): Promise<any>;
    uploadFile(file: any, req: any): Promise<void>;
    getProfilePicture(picturename: string, res: any): Promise<import("rxjs").Observable<any>>;
}
