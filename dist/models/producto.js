"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const proveedor_1 = __importDefault(require("./proveedor"));
const Producto = connection_1.default.define('Producto', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    detalle: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    idUnidad: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    idProveedor: {
        type: sequelize_1.DataTypes.UUID,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});
Producto.belongsTo(proveedor_1.default, { foreignKey: 'idProveedor', targetKey: 'id' });
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
exports.default = Producto;
//# sourceMappingURL=producto.js.map