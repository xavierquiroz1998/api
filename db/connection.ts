import { Sequelize } from 'sequelize';


const db = new Sequelize('kiarita', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
