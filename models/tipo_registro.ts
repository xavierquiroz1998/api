import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoRegistro = db.define('TipoRegistro', {
    id: {
        type: DataTypes.UUID
    },
    codigo: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false
});


export default TipoRegistro;