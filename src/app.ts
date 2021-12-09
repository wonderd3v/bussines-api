import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { mongodb } from "./config/database"; 


//Enviroment
dotenv.config();

// Database
mongodb();

// Express intialization
const app: Application = express();

// Configs
app.set('port', process.env.PORT);

// Middleawaeres
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Swagger middleware
import swaggerOptions from "./config/swagger";
const swaggerUi = require('swagger-ui-express');
const swagerJsDocs = require('swagger-jsdoc');
const swaggerDocs = swagerJsDocs(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));

// Routes
import bussinesRoutes from "./routes/bussines.routes";

app.use('/api/bussines', bussinesRoutes);
export default app;
