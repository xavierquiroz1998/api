import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Proveedor from './proveedor';

const Producto = db.define('Producto', {

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
    precio: {
        type: DataTypes.DOUBLE
    },
    idUnidad: {
        type: DataTypes.INTEGER,

    },
    idProveedor: {
        type: DataTypes.UUID,

    },
    estado: {
        type: DataTypes.BOOLEAN
    },


}, {
    freezeTableName: true,
    timestamps: false
});




Producto.belongsTo(Proveedor, { foreignKey: 'idProveedor', targetKey: 'id' });

/* Proveedor.hasOne(Producto, {
    foreignKey: 'estado'
});

Producto.belongsTo(Proveedor);
 */

/* Proveedor.hasOne(Producto);

Producto.belongsTo(Proveedor); */


//Producto.hasOne(Proveedor);
//Proveedor.belongsTo(Producto);

//Proveedor.hasOne(Producto);
//Producto.belongsTo(Proveedor);



export default Producto;