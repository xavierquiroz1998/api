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
    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    freezeTableName: true,
    timestamps: false
});


Registro.belongsTo(TipoRegistro, { foreignKey: 'idTipo', targetKey: 'id' });

export default Registro;