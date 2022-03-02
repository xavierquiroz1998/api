import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Grupo from '../models/grupo';


export const getGrupos = async (req: Request, res: Response) => {

    const grupo = await Grupo.findAll();

    res.json({ grupo });
}

export const getGrupo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const grupo = await Grupo.findByPk(id);

    if (grupo) {
        res.json(grupo);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }


}

export const postGrupo = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeCodRef = await Grupo.findOne({
            where: {
                codRef: body.codRef
            }
        });

        if (existeCodRef) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }




        const objeto = Grupo.build(body);

        await objeto.save();

        res.json(objeto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putGrupo = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const grupo = await Grupo.findByPk(id);
        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe un grupo con el id ' + id
            });
        }

        await grupo.update(body);

        res.json(grupo);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteGrupo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const grupo = await Grupo.findByPk(id);
    if (!grupo) {
        return res.status(404).json({
            msg: 'No existe un grupo con el id ' + id
        });
    }

    await grupo.update({ stsPro: false });

    // await grupo.destroy();


    res.json(grupo);
}