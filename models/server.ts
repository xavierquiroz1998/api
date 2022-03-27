import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import grupoRoutes from '../routes/grupos';
import productoRoutes from '../routes/productos';
import proveedorRoutes from '../routes/proveedor';
import UnidadRoutes from '../routes/unidades';
import BodegaRoutes from '../routes/bodegas';
import ProyectoRoutes from '../routes/proyectos';
import PermisoRoutes from '../routes/permisos';
import TipoRegistroRoutes from '../routes/tipo_registros';
import RegistroRoutes from '../routes/registros';
import DetalleRegistroRoutes from '../routes/detalle_registros';
import KardexRoutes from '../routes/kardexs';
import ParametroRoutes from '../routes/parametros';
import cors from 'cors';

import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        grupos: '/api/grupos',
        productos: '/api/productos',
        proveedores: '/api/proveedores',
        unidades: '/api/unidades',
        bodegas: '/api/bodegas',
        permisos: '/api/permisos',
        proyectos: '/api/proyectos',
        tipoRegistro: '/api/tipoRegistro',
        detalleRegistro: '/api/detalleRegistros',
        registro: '/api/registros',
        kardex: '/api/kardex',
        parametro: '/api/parametro'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw error;
        }

    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes),
            this.app.use(this.apiPaths.grupos, grupoRoutes),
            this.app.use(this.apiPaths.productos, productoRoutes),
            this.app.use(this.apiPaths.proveedores, proveedorRoutes),
            this.app.use(this.apiPaths.unidades, UnidadRoutes),
            this.app.use(this.apiPaths.bodegas, BodegaRoutes),
            this.app.use(this.apiPaths.proyectos, ProyectoRoutes),
            this.app.use(this.apiPaths.permisos, PermisoRoutes),
            this.app.use(this.apiPaths.detalleRegistro, DetalleRegistroRoutes),
            this.app.use(this.apiPaths.registro, RegistroRoutes),
            this.app.use(this.apiPaths.tipoRegistro, TipoRegistroRoutes),
            this.app.use(this.apiPaths.kardex, KardexRoutes),
            this.app.use(this.apiPaths.parametro, ParametroRoutes)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

}

export default Server;