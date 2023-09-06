"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const carSchema = new mongoose_1.default.Schema({
    make: {
        type: String,
        required: true,
    },
    model: String,
    type: String,
    year: Number,
    color: String,
    imageUrl: String
});
exports.Car = mongoose_1.default.model('car', carSchema);
