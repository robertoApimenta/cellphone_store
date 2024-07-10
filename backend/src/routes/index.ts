import { Router } from 'express';
import UserController from '../controllers/userControllers';

const router = Router();

router.get('/api/index', (req, res) => {
    res.send('Hello, World!');
});

router.post('/api/users', UserController.createUser);

export default router;

