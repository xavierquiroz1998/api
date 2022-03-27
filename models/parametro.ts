import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Parametro = db.define('Parametro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    detalle: {
        type: DataTypes.STRING
    },
    holgura: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    freezeTableName: false,
    timestamps: false
});


export default Parametro;