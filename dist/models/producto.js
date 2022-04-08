"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const grupo_1 = __importDefault(require("./grupo"));
const proveedor_1 = __importDefault(require("./proveedor"));
const unidad_1 = __importDefault(require("./unidad"));
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
    cantidad: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    pedido: {
        type: sequelize_1.DataTypes.INTEGER
    },
    idUnidad: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    idProveedor: {
        type: sequelize_1.DataTypes.UUID,
    },
    idGrupo: {
        type: sequelize_1.DataTypes.UUID,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
    },
    lote: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});
Producto.belongsTo(proveedor_1.default, { foreignKey: 'idProveedor', targetKey: 'id' });
Producto.belongsTo(unidad_1.default, { foreignKey: 'idUnidad', targetKey: 'id' });
Producto.belongsTo(grupo_1.default, { foreignKey: 'idGrupo', targetKey: 'id' });
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