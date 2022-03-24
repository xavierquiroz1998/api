import { Sequelize } from 'sequelize';


const db = new Sequelize('kiarita prueba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
