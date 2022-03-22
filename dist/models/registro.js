"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Registro = connection_1.default.define('Registro', {
    id: {
        type: sequelize_1.DataTypes.UUID
    },
    idTipo: {
        type: sequelize_1.DataTypes.UUID
    },
    idDetalle: {
        type: sequelize_1.DataTypes.UUID
    },
    detalle: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Registro;
//# sourceMappingURL=registro.js.map