import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Unidad = db.define('Unidad', {
    codigo: {
        type: DataTypes.STRING
    },
    detalle: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});


export default Unidad;