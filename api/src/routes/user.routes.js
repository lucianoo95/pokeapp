import { UserController } from '../controllers';
import { authJwt } from '../middlewares';
import { Router } from 'express';
const router = Router();

router.get('/list', [authJwt.verifyToken, authJwt.verifyRole], UserController.list);

export default router;
