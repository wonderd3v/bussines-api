import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

//Enviroment
dotenv.config();

// Express intialization
const app: Application = express();

// Configs
app.set('port', process.env.PORT);

// Middleawaeres
app.use(cors);
app.use(express.json());
app.use(morgan('dev'));

// Routes

export default app;
