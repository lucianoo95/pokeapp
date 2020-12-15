import { AuthController } from '../controllers';
import { verifyUser } from '../middlewares';
import { Router } from 'express';
const router = Router();

router.post('/signup', verifyUser.checkDuplicateEmail, AuthController.signUp);
router.post('/signin', AuthController.signIn);

export default router;