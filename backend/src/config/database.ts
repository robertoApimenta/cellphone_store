import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cellphone', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
});

export default sequelize;
