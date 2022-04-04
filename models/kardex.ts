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
        type: DataTypes.DOUBLE
    },
    proUntI: {
        type: DataTypes.DOUBLE
    },
    proTtlI: {
        type: DataTypes.DOUBLE
    },

    proCanS: {
        type: DataTypes.DOUBLE
    },
    proUntS: {
        type: DataTypes.DOUBLE
    },
    proTtlS: {
        type: DataTypes.DOUBLE
    },

    proCanE: {
        type: DataTypes.DOUBLE
    },
    proUntE: {
        type: DataTypes.DOUBLE
    },
    proTtlE: {
        type: DataTypes.DOUBLE
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