"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const producto_1 = __importDefault(require("./producto"));
const Movimiento = connection_1.default.define('Movimiento', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idProducto: {
        type: sequelize_1.DataTypes.STRING
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER
    },
    actual: {
        type: sequelize_1.DataTypes.INTEGER
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE
    },
}, {
    freezeTableName: true,
    timestamps: false
});
Movimiento.belongsTo(producto_1.default, { foreignKey: 'idProducto', targetKey: 'id' });
exports.default = Movimiento;
//# sourceMappingURL=movimiento.js.map