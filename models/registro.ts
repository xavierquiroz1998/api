import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Registro = db.define('Registro', {
    id: {
        type: DataTypes.UUID
    },
    idTipo: {
        type: DataTypes.UUID
    },
    idDetalle: {
        type: DataTypes.UUID
    },
    detalle: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});


export default Registro;