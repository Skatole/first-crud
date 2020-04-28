import { Router } from 'express';
import * as userController from '../controllers/goupUseruser';

export const router: Router = Router({ mergeParams: true });

router.get('/goup/user', userController.index);
router.get('/goup/user/:id', userController.show);
router.post('/goup/user', userController.create);
router.put('/goup/user/:id', userController.update);
router.delete('/goup/user/:id', userController.destroy);
