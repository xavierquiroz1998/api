"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Proveedor = connection_1.default.define('Proveedor', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    identificacion: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isAlpha: {
                msg: "El nombre no puede contener numero"
            },
        }
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Proveedor;
//# sourceMappingURL=proveedor.js.map