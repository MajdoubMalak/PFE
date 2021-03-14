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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const jwt_guard_1 = require("../auth/guards/jwt-guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const config_1 = require("../config");
const email_service_1 = require("../email/email.service");
const user_model_1 = require("./user.model");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async addUser(username, useremail, userpassword, usergender, userprofilepic, userphonenumber, userage) {
        const user = await this.userService.AddUser(username, useremail, userpassword, usergender, userprofilepic, userphonenumber, userage);
        return user;
    }
    async Login(username, password) {
        return this.userService.Login(username, password);
    }
    async getAllUsers() {
        const result = await this.userService.getAllUsers();
        return result.map(user => ({
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            gender: user.gender,
            profilepicture: user.profilePicture,
            phoneNumber: user.phoneNumber,
            age: user.age,
        }));
    }
    async checkEmailAccount(userId) {
        return this.userService.checkEmailAccount(userId);
    }
    getUser(userId) {
        return this.userService.getSingleUser(userId);
    }
    async updateUser(userId, username, useremail, usergender, userphonenumber, userage) {
        await this.userService.updateUser(userId, username, useremail, usergender, userphonenumber, userage);
        return null;
    }
    async activateAccount(userId, codeNumber) {
        return await this.userService.activateAccount(userId, codeNumber);
    }
    async deleteUser(userId) {
        await this.userService.deleteUser(userId);
        return null;
    }
    async uploadFile(file, req) {
        const user = req.user.user;
        const updateduser = this.userService.updateprofilepic(user._id, file[0].filename);
        console.log(updateduser);
        return updateduser;
    }
    async getProfilePicture(picturename, res) {
        return rxjs_1.of(res.sendFile(path_1.join(process.cwd(), 'uploads/' + picturename)));
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('username')),
    __param(1, common_1.Body('email')),
    __param(2, common_1.Body('password')),
    __param(3, common_1.Body('gender')),
    __param(4, common_1.Body('profilePicture')),
    __param(5, common_1.Body('phoneNumber')),
    __param(6, common_1.Body('age')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
__decorate([
    common_1.Post('/login'),
    __param(0, common_1.Body('username')),
    __param(1, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Login", null);
__decorate([
    roles_decorator_1.hasRoles(user_model_1.UserRole.ADMIN),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    common_1.Get('CheckEmailAccount/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkEmailAccount", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('username')),
    __param(2, common_1.Body('email')),
    __param(3, common_1.Body('gender')),
    __param(4, common_1.Body('phoneNumber')),
    __param(5, common_1.Body('age')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    common_1.Patch('ActivateAccount/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body('codeNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "activateAccount", null);
__decorate([
    roles_decorator_1.hasRoles(user_model_1.UserRole.ADMIN, user_model_1.UserRole.PARTI),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('file', null, config_1.multerOptions)),
    __param(0, common_1.UploadedFiles()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadFile", null);
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Get('getprofilepicture/:picturename'),
    __param(0, common_1.Param('picturename')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfilePicture", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map