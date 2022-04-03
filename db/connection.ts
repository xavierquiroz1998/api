import { Sequelize } from 'sequelize';


const db = new Sequelize('kiara prueba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
