import { config } from "dotenv";
config();
const { DATABASE_URL } = process.env;
import mongoose from "mongoose";
import { success, info, error } from "consola";

// Conectar a la base de datos
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const mongooseConn = mongoose.connection;

// Borrar datos de las colecciones.
const cleanCollections = () => {
  mongooseConn.db.listCollections().toArray((error, collections) => {
    collections.forEach((collection) => {
      mongooseConn.db
        .dropCollection(collection.name)
        .then((response) => {
          info({
            message: `Drop data from collection ${collection.name}: ${response}`,
          });
        })
        .catch((error) => console.log("Drop data from collections:", error));
    });
  });
};

// Error de conexion
mongooseConn.on("error", (errorDB, response) => {
  error({
    message: `MongoDB failed to connect: ${errorDB}`,
    badge: true,
  });
});

// Conexion de mongoose
mongooseConn.once("open", (error, response) => {
  success({
    message: `MongoDB on port: ${mongooseConn.port}`,
  });

  success({
    message: `Connected to DB: ${mongooseConn.name}`,
  });

  // Borrar datos de las colecciones.
  // cleanCollections();
});

// Escuchar desconexion mongoose
mongooseConn.on("disconnected", (errorDB, response) => {
  error({
    message: `MongoDB Disconnected: ${errorDB}`,
    badge: true,
  });
});
