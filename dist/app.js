"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = require("./config/database");
//Enviroment
dotenv_1.default.config();
// Database
database_1.mongodb();
// Express intialization
const app = express_1.default();
// Configs
app.set('port', process.env.PORT);
// Middleawaeres
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
//Swagger middleware
const swagger_1 = __importDefault(require("./config/swagger"));
const swaggerUi = require('swagger-ui-express');
const swagerJsDocs = require('swagger-jsdoc');
const swaggerDocs = swagerJsDocs(swagger_1.default);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger_1.default));
// Routes
const bussines_routes_1 = __importDefault(require("./routes/bussines.routes"));
app.use('/api/bussines', bussines_routes_1.default);
exports.default = app;
