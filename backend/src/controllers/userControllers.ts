import { Request, Response } from 'express';
import UserService from '../services/userServices';

class UserController {
    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const user = await UserService.createUser(name, email, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar usuário', error });
        }
    }
}

export default new UserController();
