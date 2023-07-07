"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var chartSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    data: {
        type: Array,
        required: [true, 'Data is required.'],
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Chart', chartSchema);
