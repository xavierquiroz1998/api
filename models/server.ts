import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import grupoRoutes from '../routes/grupos';
import productoRoutes from '../routes/productos';
import proveedorRoutes from '../routes/proveedor';
import UnidadRoutes from '../routes/unidades';
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
        unidades: '/api/unidades'
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
            this.app.use(this.apiPaths.unidades, UnidadRoutes)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

}

export default Server;