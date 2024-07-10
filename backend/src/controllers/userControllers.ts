import { Request, Response } from 'express';
import UserService from '../services/userServices';

class UserController {

    /**
   * @swagger
   * /api/users:
   *   post:
   *     summary: Cria um novo usuário
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - name
   *               - email
   *               - password
   *             properties:
   *               name:
   *                 type: string
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       201:
   *         description: Usuário criado com sucesso
   *       500:
   *         description: Erro ao criar usuário
   */
    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const user = await UserService.createUser(name, email, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar usuário', error });
        }
    }

    /**
   * @swagger
   * /api/users:
   *   get:
   *     summary: Lista todos os usuários
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Lista de usuários
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   *       500:
   *         description: Erro ao buscar usuários
   */
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar usuários', error });
        }
    }

    /**
   * @swagger
   * /api/users/{id}:
   *   get:
   *     summary: Busca um usuário pelo ID
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: ID do usuário
   *     responses:
   *       200:
   *         description: Usuário encontrado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       404:
   *         description: Usuário não encontrado
   *       500:
   *         description: Erro ao buscar usuário
   */
    async getUserById(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const user = await UserService.getUserById(Number(id));
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar usuário', error });
        }
    }

    /**
   * @swagger
   * /api/users/email/{email}:
   *   get:
   *     summary: Busca um usuário pelo email
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: email
   *         schema:
   *           type: string
   *         required: true
   *         description: Email do usuário
   *     responses:
   *       200:
   *         description: Usuário encontrado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       404:
   *         description: Usuário não encontrado
   *       500:
   *         description: Erro ao buscar usuário
   */
    async getUserByEmail(req: Request, res: Response) {
        const { email } = req.params;

        try {
            const user = await UserService.getUserByEmail(email);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar usuário', error });
        }
    }
}

export default new UserController();
