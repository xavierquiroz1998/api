import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Proyecto = db.define('Proyecto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    referencia: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    detalle: {
        type: DataTypes.STRING
    },
    ruta: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});


export default Proyecto;