import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Producto from './producto';

const Kardex = db.define('Kardex', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    codMov: {
        type: DataTypes.STRING
    },

    idProducto: {
        type: DataTypes.INTEGER
    },
    proCanI: {
        type: DataTypes.INTEGER
    },
    proUntI: {
        type: DataTypes.DECIMAL
    },
    proTtlI: {
        type: DataTypes.DECIMAL
    },

    proCanS: {
        type: DataTypes.INTEGER
    },
    proUntS: {
        type: DataTypes.DECIMAL
    },
    proTtlS: {
        type: DataTypes.DECIMAL
    },

    proCanE: {
        type: DataTypes.INTEGER
    },
    proUntE: {
        type: DataTypes.DECIMAL
    },
    proTtlE: {
        type: DataTypes.DECIMAL
    },
    createdAt: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});

Kardex.belongsTo(Producto, { foreignKey: 'idProducto', targetKey: 'id' });

export default Kardex;