import { Sequelize } from 'sequelize';

//kiara prueba
//kiarita
const db = new Sequelize('kiarita', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
