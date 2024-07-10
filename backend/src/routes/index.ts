import { Router } from 'express';
import UserController from '../controllers/userControllers';

const router = Router();

router.get('/api/index', (req, res) => {
    res.send('Hello, World!');
});

router.post('/api/users', UserController.createUser);
router.get('/api/users', UserController.getAllUsers);
router.get('/api/users/:id', UserController.getUserById);
router.get('/api/users/email/:email', UserController.getUserByEmail);

export default router;