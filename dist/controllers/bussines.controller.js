"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bussines_model_1 = __importDefault(require("../models/bussines.model"));
// CRUD OPERATIONS
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bussines = yield bussines_model_1.default.find();
    if (bussines.length <= 0)
        return res.status(204).json('El registro no existe');
    return res.status(200).json(bussines);
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bussinesFound = yield bussines_model_1.default.findById(req.params.id);
    if (!bussinesFound)
        return res.status(204).json('El registro no existo');
    return res.status(200).json(bussinesFound);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBussines = new bussines_model_1.default({
        name: req.body.name,
        typeOfBussiness: req.body.typeOfBussiness,
        photo: req.body.photo,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        address: req.body.address
    });
    const savedBussines = yield newBussines.save();
    return res.status(201).json(savedBussines);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bussinesFound = yield bussines_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!bussinesFound)
        return res.status(204).json('El registro no existe');
    return res.status(202).json(bussinesFound);
});
const deletee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bussinesFound = yield bussines_model_1.default.findByIdAndDelete(req.params.id);
    if (!bussinesFound)
        return res.status(204).json('El registro no existe');
    return res.status(204).json('registro eliminado');
});
exports.default = {
    getAll,
    getById,
    create,
    update,
    deletee
};
