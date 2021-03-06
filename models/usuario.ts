import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    clave: {
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    expiracion: {
        type: DataTypes.DATE
    },

});


export default Usuario;