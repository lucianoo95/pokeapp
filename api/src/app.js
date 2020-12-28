import express from "express";
import morgan from "morgan";
import cors from "cors";
import { handleError } from './config/error.config';
import routes from './routes';
import { config } from "dotenv";
config();

// iniciar App
const app = express();

// remover header 
app.disable("x-powered-by");

// config cors
const whitelist = [
  'http://localhost:3000',
  /*Aca va el dominio de produccion*/
];
const corsOptions = {
  // origin: (origin, callback) => {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS!'))
  //   }
  // },
  origin: true,
  credentials: true,
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}

// middlewares
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

// config global de rutas
app.use('/api/v1', routes);

// Error catching endware.
app.use(handleError);

export default app;
