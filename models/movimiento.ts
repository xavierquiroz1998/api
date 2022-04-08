import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Producto from './producto';

const Movimiento = db.define('Movimiento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idProducto: {
        type: DataTypes.STRING
    },
    codigo: {
        type: DataTypes.STRING
    },
    total: {
        type: DataTypes.INTEGER
    },
    actual: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true,
    timestamps: false
});

Movimiento.belongsTo(Producto, { foreignKey: 'idProducto', targetKey: 'id' });

export default Movimiento;