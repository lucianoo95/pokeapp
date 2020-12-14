import { UserController } from '../controllers';
import { Router } from 'express';
const router = Router();

router.get('/list', UserController.list);
router.post('/add', UserController.add);

export default router;
