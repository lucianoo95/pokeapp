import express from "express";
import morgan from "morgan";
import { success } from "consola";
import connectDB from "./config/db.config";
import cors from "cors";
import routes from './routes';
import { config } from "dotenv";
config();
const { APP_PORT } = process.env;

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

// conectar a la db
connectDB().then(() => {
  // Iniciar servidor
  app.listen({ port: APP_PORT }, () => {
    success({
      message: `Server on port: ${APP_PORT}`,
      badge: true,
    });
  });
});
