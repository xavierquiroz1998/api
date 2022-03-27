"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Parametro = connection_1.default.define('Parametro', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    detalle: {
        type: sequelize_1.DataTypes.STRING
    },
    holgura: {
        type: sequelize_1.DataTypes.INTEGER
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    freezeTableName: false,
    timestamps: false
});
exports.default = Parametro;
//# sourceMappingURL=parametro.js.map