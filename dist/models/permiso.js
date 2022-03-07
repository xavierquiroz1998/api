"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const proyecto_1 = __importDefault(require("./proyecto"));
const usuario_1 = __importDefault(require("./usuario"));
const Permiso = connection_1.default.define('Permiso', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idProyecto: {
        type: sequelize_1.DataTypes.STRING
    },
    idUsuario: {
        type: sequelize_1.DataTypes.STRING
    },
    creacion: {
        type: sequelize_1.DataTypes.STRING
    },
    actualizar: {
        type: sequelize_1.DataTypes.STRING
    },
    anular: {
        type: sequelize_1.DataTypes.STRING
    },
    consulta: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    timestamps: false
});
Permiso.belongsTo(proyecto_1.default, { foreignKey: 'idProyecto', targetKey: 'id' });
Permiso.belongsTo(usuario_1.default, { foreignKey: 'idUsuario', targetKey: 'id' });
exports.default = Permiso;
//# sourceMappingURL=permiso.js.map