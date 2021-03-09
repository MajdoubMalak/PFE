"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserRole = void 0;
const mongoose = require("mongoose");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["PARTI"] = "particulier";
    UserRole["ORGA"] = "organisateur";
    UserRole["PRESTA"] = "prestataire";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
exports.UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    profilePicture: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    age: { type: Number, required: true },
    role: { type: String, required: true, default: UserRole.PARTI },
});
//# sourceMappingURL=user.model.js.map