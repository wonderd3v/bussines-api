"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = app_1.default.get('port') || 5001;
app_1.default.listen(PORT, () => console.log(`Server running on port ${PORT}`));
