import { DataTypes } from 'sequelize';
import db from '../db/connection';

const DetalleRegistro = db.define('DetalleRegistro', {
    id: {
        type: DataTypes.UUID
    },
    cantidad: {
        type: DataTypes.DOUBLE
    },
    total: {
        type: DataTypes.DOUBLE
    },
    idProducto: {
        type: DataTypes.UUID
    },
    idRegistro: {
        type: DataTypes.UUID
    },
    observacion: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false
});


export default DetalleRegistro;