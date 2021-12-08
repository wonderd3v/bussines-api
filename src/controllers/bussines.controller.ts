import { Request, Response } from 'express';
import Bussines, { IBussiness } from "../models/bussines.model";

// CRUD OPERATIONS
const getAll = async (req:Request, res: Response): Promise<Response> => {
    const bussines = await Bussines.find();
    if (bussines.length <= 0)
        return res.status(204).json('El registro no existe');
    
    return res.status(200).json(bussines);
}

const getById = async (req: Request, res: Response): Promise<Response> => {
    const bussinesFound = await Bussines.findById(req.params.id);
    if (!bussinesFound)
        return res.status(204).json('El registro no existo');

    return res.status(200).json(bussinesFound);
}

const create = async (req: Request, res: Response): Promise<Response> => {
    const newBussines = new Bussines({
        name: req.body.name,
        typeOfBussiness: req.body.typeOfBussiness,
        photo: req.body.photo,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        address: req.body.address
    });

    const savedBussines: IBussiness = await newBussines.save();
    return res.status(201).json(savedBussines);    
}

const update = async (req: Request, res: Response): Promise<Response> => {
    const bussinesFound = await Bussines.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!bussinesFound)
        return res.status(204).json('El registro no existe');
    
    return res.status(202).json(bussinesFound);
}

const deletee = async (req: Request, res: Response): Promise<Response> => {
    const bussinesFound = await Bussines.findByIdAndDelete(req.params.id);

    if (!bussinesFound)
        return res.status(204).json('El registro no existe');
    
    return res.status(204).json('registro eliminado');
}

export default {
    getAll,
    getById,
    create,
    update,
    deletee
}
