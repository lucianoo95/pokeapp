import userRouter from './user.routes';
import authRouter from './auth.routes';
import express from 'express';

const app = express();

app.use('/auth', authRouter);
app.use('/user', userRouter);

export default app;