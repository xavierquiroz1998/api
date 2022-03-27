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
        type: sequelize_1.DataTypes.INTEGER
    },
    proUntI: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    proTtlI: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    proCanS: {
        type: sequelize_1.DataTypes.INTEGER
    },
    proUntS: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    proTtlS: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    proCanE: {
        type: sequelize_1.DataTypes.INTEGER
    },
    proUntE: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    proTtlE: {
        type: sequelize_1.DataTypes.DECIMAL
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