"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const accommodationsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    maxGuests: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = accommodationsSchema;
//# sourceMappingURL=schema.js.map