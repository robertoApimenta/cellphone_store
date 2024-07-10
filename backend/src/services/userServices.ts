import User from '../models/usersModels';

class UserService {
    async createUser(name: string, email: string, password: string) {
        const user = await User.create({ name, email, password });
        return user;
    }

    async getAllUsers() {
        return await User.findAll();
    }

    async getUserById(id: number) {
        return await User.findByPk(id);
    }

    async getUserByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }
}

export default new UserService();
