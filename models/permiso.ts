import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Proyecto from './proyecto';
import Usuario from './usuario';

const Permiso = db.define('Permiso', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idProyecto: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.STRING
    },
    creacion: {
        type: DataTypes.STRING
    },
    actualizar: {
        type: DataTypes.STRING
    },
    anular: {
        type: DataTypes.STRING
    },
    consulta: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false
});

Permiso.belongsTo(Proyecto, { foreignKey: 'idProyecto', targetKey: 'id' });
Permiso.belongsTo(Usuario, { foreignKey: 'idUsuario', targetKey: 'id' });


export default Permiso;