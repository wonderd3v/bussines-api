"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bussinesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    typeOfBussiness: {
        type: String,
    },
    photo: {
        type: String
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
    }
});
exports.default = mongoose_1.model('Bussines', bussinesSchema);
