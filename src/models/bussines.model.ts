import { Schema, model } from 'mongoose';
export interface IBussiness {
    name: string;
    typeOfBussiness: string;
    photo: string;
    latitude: number;
    longitude: number;
    address: string;
    phoneNumber: string;
}

const bussinesSchema = new Schema({
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
        type: Number,
        required: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
    }
});

export default model<IBussiness>('Bussines', bussinesSchema);