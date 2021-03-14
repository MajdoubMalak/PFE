"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const auth_service_1 = require("../auth/auth.service");
const email_service_1 = require("../email/email.service");
let UserService = class UserService {
    constructor(userModel, authService, emailService) {
        this.userModel = userModel;
        this.authService = authService;
        this.emailService = emailService;
    }
    async AddUser(username, email, password, gender, profilepicture, phoneNumber, age) {
        const usernameexist = await this.userModel.findOne({ username: username }).exec();
        const useremailexist = await this.userModel.findOne({ email: email }).exec();
        const userphoneexist = await this.userModel.findOne({ phoneNumber: phoneNumber }).exec();
        if (usernameexist) {
            return await " user name exist !";
        }
        else if (useremailexist) {
            return await " user email exist !";
        }
        else if (userphoneexist) {
            return await " user phone number exist !";
        }
        else {
            const newUser = new this.userModel({
                username: username,
                email: email.toLowerCase(),
                password: password,
                gender: gender,
                profilePicture: profilepicture,
                phoneNumber: phoneNumber,
                age: age
            });
            const hashed = await this.authService.hashPassword(newUser.password);
            newUser.password = hashed;
            const saved_user = await newUser.save();
            const token = await this.authService.generateJWT(saved_user);
            console.log(token);
            return await token;
        }
    }
    async getAllUsers() {
        const result = await this.userModel.find().exec();
        console.log(result);
        return result;
    }
    async getSingleUser(id) {
        const user = await this.findUser(id);
        if (!user) {
            throw new common_1.NotFoundException('could not find the user');
        }
        return user;
    }
    async updateUser(id, username, email, profilepicture, phoneNumber, gender, age) {
        const updateduser = await this.findUser(id);
        if (username) {
            updateduser.username = username;
        }
        if (email) {
            updateduser.email = email;
        }
        if (profilepicture) {
            updateduser.profilePicture = profilepicture;
        }
        if (phoneNumber) {
            updateduser.phoneNumber = phoneNumber;
        }
        if (age) {
            updateduser.age = age;
        }
        if (gender) {
            updateduser.gender = gender;
        }
        updateduser.save();
    }
    async updateprofilepic(id, profilepicture) {
        const updateduser = await this.findUser(id);
        updateduser.profilePicture = profilepicture;
        updateduser.save();
    }
    async updateCodeNumber(id, codenumber) {
        const updateuser = await this.findUser(id);
        updateuser.codeNumber = codenumber;
        updateuser.save();
    }
    async deleteUser(id) {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        console.log(result);
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not be deleted');
        }
    }
    async findUser(id) {
        let user;
        try {
            user = await this.userModel.findById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find user');
        }
        return user;
    }
    async Login(username, password) {
        const user = await this.userModel.findOne({ username: username }).exec();
        if (!user) {
            return 'wrong username taped';
        }
        else {
            if (!user.activated) {
                return 'Account not activated';
            }
            else {
                if (await this.authService.comparePasswords(password, user.password)) {
                    return this.authService.generateJWT(user);
                }
                else {
                    return 'wrong password inserted taped';
                }
            }
        }
    }
    async checkEmailAccount(id) {
        const user = await this.findUser(id);
        const username = user.username;
        const useremail = user.email;
        const random = Math.random() * 10000;
        const code = Math.round(random);
        console.log('random number: ', random);
        console.log(code);
        this.emailService.sendemail(username, useremail, code);
        user.codeNumber = code;
        user.save();
        return "Code number sent by email";
    }
    async activateAccount(id, codeNumber) {
        const updateuser = await this.findUser(id);
        if (updateuser.codeNumber == codeNumber) {
            updateuser.activated = true;
            updateuser.save();
            return 'account activated';
        }
        else {
            return 'wrong code';
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        auth_service_1.AuthService,
        email_service_1.EmailService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map