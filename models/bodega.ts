import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Bodega = db.define('Bodega', {
    idProducto: {
        type: DataTypes.UUID
    },
    stock: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});


export default Bodega;