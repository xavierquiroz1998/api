"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const producto_1 = __importDefault(require("./producto"));
const registro_1 = __importDefault(require("./registro"));
const DetalleRegistro = connection_1.default.define('DetalleRegistro', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cantidad: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    total: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    idProducto: {
        type: sequelize_1.DataTypes.UUID
    },
    idRegistro: {
        type: sequelize_1.DataTypes.UUID
    },
    observacion: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false
});
DetalleRegistro.belongsTo(registro_1.default, { foreignKey: 'idRegistro', targetKey: 'id' });
DetalleRegistro.belongsTo(producto_1.default, { foreignKey: 'idProducto', targetKey: 'id' });
exports.default = DetalleRegistro;
//# sourceMappingURL=detalle_registro.js.map