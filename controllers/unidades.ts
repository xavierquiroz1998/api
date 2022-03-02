import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Unidad from '../models/unidad';


export const getUnidades = async (req: Request, res: Response) => {

    const unidades = await Unidad.findAll();

    res.json({ unidades });
}

export const getUnidad = async (req: Request, res: Response) => {

    const { id } = req.params;

    const unidad = await Unidad.findByPk(id);

    if (unidad) {
        res.json(unidad);
    } else {
        res.status(404).json({
            msg: `No existe un Unidad con el id ${id}`
        });
    }


}

export const postUnidad = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeunidad = await Unidad.findOne({
            where: {
                codigo: body.codigo
            }
        });

        if (existeunidad) {
            return res.status(400).json({
                msg: 'Ya existe codigo' + body.codigo
            });
        }




        const unidad = Unidad.build(body);

        await unidad.save();

        res.json(unidad);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putUnidad = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const unidad = await Unidad.findByPk(id);
        if (!unidad) {
            return res.status(404).json({
                msg: 'No existe un Unidad con el id ' + id
            });
        }

        await unidad.update(body);

        res.json(unidad);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteUnidad = async (req: Request, res: Response) => {

    const { id } = req.params;

    const unidad = await Unidad.findByPk(id);
    if (!unidad) {
        return res.status(404).json({
            msg: 'No existe un Unidad con el id ' + id
        });
    }

    await unidad.update({ estado: false });

    // await Unidad.destroy();


    res.json(unidad);
}