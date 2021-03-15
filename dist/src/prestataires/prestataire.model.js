"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestataireSchema = void 0;
const mongoose = require("mongoose");
exports.PrestataireSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});
//# sourceMappingURL=prestataire.model.js.map