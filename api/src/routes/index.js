import userRouter from './user.routes';
import express from 'express';
const app = express();

app.use('/user', userRouter);

export default app;