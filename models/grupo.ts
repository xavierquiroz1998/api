import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Grupo = db.define('Grupo', {
    referencia: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    detalle: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});


export default Grupo;