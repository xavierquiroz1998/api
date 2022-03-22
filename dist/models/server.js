"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const grupos_1 = __importDefault(require("../routes/grupos"));
const productos_1 = __importDefault(require("../routes/productos"));
const proveedor_1 = __importDefault(require("../routes/proveedor"));
const unidades_1 = __importDefault(require("../routes/unidades"));
const bodegas_1 = __importDefault(require("../routes/bodegas"));
const proyectos_1 = __importDefault(require("../routes/proyectos"));
const permisos_1 = __importDefault(require("../routes/permisos"));
const tipo_registros_1 = __importDefault(require("../routes/tipo_registros"));
const registros_1 = __importDefault(require("../routes/registros"));
const detalle_registros_1 = __importDefault(require("../routes/detalle_registros"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
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
            registro: '/api/registros'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                throw error;
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta pública
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default),
            this.app.use(this.apiPaths.grupos, grupos_1.default),
            this.app.use(this.apiPaths.productos, productos_1.default),
            this.app.use(this.apiPaths.proveedores, proveedor_1.default),
            this.app.use(this.apiPaths.unidades, unidades_1.default),
            this.app.use(this.apiPaths.bodegas, bodegas_1.default),
            this.app.use(this.apiPaths.proyectos, proyectos_1.default),
            this.app.use(this.apiPaths.permisos, permisos_1.default),
            this.app.use(this.apiPaths.detalleRegistro, detalle_registros_1.default),
            this.app.use(this.apiPaths.registro, registros_1.default),
            this.app.use(this.apiPaths.tipoRegistro, tipo_registros_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map