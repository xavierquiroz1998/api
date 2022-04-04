"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const producto_1 = __importDefault(require("./producto"));
const Kardex = connection_1.default.define('Kardex', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    codMov: {
        type: sequelize_1.DataTypes.STRING
    },
    idProducto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    proCanI: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    proUntI: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    proTtlI: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    proCanS: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    proUntS: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    proTtlS: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    proCanE: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    proUntE: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    proTtlE: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});
Kardex.belongsTo(producto_1.default, { foreignKey: 'idProducto', targetKey: 'id' });
exports.default = Kardex;
//# sourceMappingURL=kardex.js.map