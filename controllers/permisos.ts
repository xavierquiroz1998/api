import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Permiso from '../models/permiso';
import Proyecto from '../models/proyecto';
import Usuario from '../models/usuario';


export const getPermisos = async (req: Request, res: Response) => {

    const permisos = await Permiso.findAll();

    res.json(permisos);
}

export const getPermisosUsuario = async (req: Request, res: Response) => {

    const { usuario } = req.params;

    const permisos = await Permiso.findAll(

        {
            include: [Usuario, Proyecto],
            where: {
                idUsuario: usuario
            }
        }
    );

    res.json(permisos);
}

export const getPermiso = async (req: Request, res: Response) => {

    const { id } = req.params;

    const permiso = await Permiso.findByPk(id);

    if (permiso) {
        res.json(permiso);
    } else {
        res.status(404).json({
            msg: `No existe un permiso con el id ${id}`
        });
    }


}

export const postPermiso = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existepermiso = await Permiso.findOne({

            where: {
                codigo: body.codigo
            }
        });

        if (existepermiso) {
            return res.status(400).json({
                msg: 'Ya existe codigo' + body.codigo
            });
        }




        const permiso = Permiso.build(body);

        await permiso.save();

        res.json(permiso);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putPermiso = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const permiso = await Permiso.findByPk(id);
        if (!permiso) {
            return res.status(404).json({
                msg: 'No existe un permiso con el id ' + id
            });
        }

        await permiso.update(body);

        res.json(permiso);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deletePermiso = async (req: Request, res: Response) => {

    const { id } = req.params;

    const permiso = await Permiso.findByPk(id);
    if (!permiso) {
        return res.status(404).json({
            msg: 'No existe un permiso con el id ' + id
        });
    }

    await permiso.update({ estado: false });

    // await permiso.destroy();


    res.json(permiso);
}