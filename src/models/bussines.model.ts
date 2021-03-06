import { TypeOfBussiness } from "core/enums";
import { Schema, model } from 'mongoose';

export interface IBussiness {
    name: string;
    typeOfBussiness: TypeOfBussiness;
    photo: string;
    latitude: number;
    longitude: number;
    address: string;
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
    } 
})

export default model<IBussiness>('Bussines', bussinesSchema);