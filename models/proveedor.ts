import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Proveedor = db.define('Proveedor', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    identificacion: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    holgura: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

}, {
    freezeTableName: true,
    timestamps: false
});



export default Proveedor;