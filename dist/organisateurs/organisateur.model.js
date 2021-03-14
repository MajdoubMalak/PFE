"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisateurSchema = void 0;
const mongoose = require("mongoose");
exports.OrganisateurSchema = new mongoose.Schema({
    region: { type: String, required: true },
    societe: { type: String, required: true },
    type: { type: String, required: true },
});
//# sourceMappingURL=organisateur.model.js.map