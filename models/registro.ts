import { DataTypes } from 'sequelize';
import db from '../db/connection';
import TipoRegistro from './tipo_registro';

const Registro = db.define('Registro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idTipo: {
        type: DataTypes.UUID
    },
    detalle: {
        type: DataTypes.STRING
    },
    cliente: {
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.INTEGER
    },
    idSecundario: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    fecha: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    },
}, {
    freezeTableName: true,
    timestamps: false
});


Registro.belongsTo(TipoRegistro, { foreignKey: 'idTipo', targetKey: 'id' });

export default Registro;