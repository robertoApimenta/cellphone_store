import User from '../models/usersModels';

class UserService {
    async createUser(name: string, email: string, password: string) {
        const user = await User.create({ name, email, password });
        return user;
    }
}

export default new UserService();
