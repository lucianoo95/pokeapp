import app from './app';
import { success } from "consola";
import './config/db.config';
const { APP_PORT } = process.env;

// Iniciar servidor
app.listen({ port: APP_PORT }, () => {
  success({
    message: `Server on port: ${APP_PORT}`,
    badge: true,
  });
});
