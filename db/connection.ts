import { Sequelize } from 'sequelize';

//kiara prueba
//kiarita
const db = new Sequelize('kiara prueba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
