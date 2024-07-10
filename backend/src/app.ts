import express from 'express';
import indexRouter from './routes/index';
import sequelize from './config/database';

const app = express();
const port = 3000;

app.use(express.json());
app.use(indexRouter);

sequelize.sync({ force: false }).then(() => {
    console.log('Tabelas sincronizadas!');
});

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        console.log(`Servidor rodando em http://localhost:${port}`);
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
});


