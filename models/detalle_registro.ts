import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Producto from './producto';
import Registro from './registro';

const DetalleRegistro = db.define('DetalleRegistro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
    lote: {
        type: DataTypes.STRING
    },
    observacion: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false
});



DetalleRegistro.belongsTo(Registro, { foreignKey: 'idRegistro', targetKey: 'id' });
DetalleRegistro.belongsTo(Producto, { foreignKey: 'idProducto', targetKey: 'id' });

export default DetalleRegistro;