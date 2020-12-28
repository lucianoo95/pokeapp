import userRouter from './user.routes';
import authRouter from './auth.routes';
import collectionRouter from './collection.routes';

import express from 'express';

const app = express();

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/collection', collectionRouter);

export default app;