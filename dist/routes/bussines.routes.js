"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const bussines_controller_1 = __importDefault(require("../controllers/bussines.controller"));
router.get('/', bussines_controller_1.default.getAll);
router.get("/:id", bussines_controller_1.default.getById);
router.post("/add", bussines_controller_1.default.create);
router.put("/edit/:id", bussines_controller_1.default.update);
router.delete("/delete/:id", bussines_controller_1.default.deletee);
exports.default = router;
