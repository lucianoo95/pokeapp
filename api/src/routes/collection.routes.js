import { CollectionController } from '../controllers';
import { authJwt } from '../middlewares';
import { Router } from 'express';
const router = Router();

router.post('/create', authJwt.verifyToken, CollectionController.create);
router.delete('/', authJwt.verifyToken, CollectionController.remove);
router.post('/add/pokemon', authJwt.verifyToken, CollectionController.addPokemon);
router.delete('/delete/pokemon', authJwt.verifyToken, CollectionController.removePokemon);

export default router;