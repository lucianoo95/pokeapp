import { UserController } from '../controllers';
import express from 'express';
const router = express.Router();

router.get('/list', UserController.list);
router.post('/add', UserController.add);

export default router;
