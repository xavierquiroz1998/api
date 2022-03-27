import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Parametro from '../models/parametro';


export const getParametros = async (req: Request, res: Response) => {

    const parametros = await Parametro.findAll();

    res.json(parametros);
}

export const getParametro = async (req: Request, res: Response) => {

    const { id } = req.params;

    const parametro = await Parametro.findByPk(id);

    if (parametro) {
        res.json(parametro);
    } else {
        res.status(404).json({
            msg: `No existe un parametro con el id ${id}`
        });
    }


}

export const postParametro = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const parametro = Parametro.build(body);

        await parametro.save();

        res.json(parametro);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putParametro = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const parametro = await Parametro.findByPk(id);
        if (!parametro) {
            return res.status(404).json({
                msg: 'No existe un parametro con el id ' + id
            });
        }

        await parametro.update(body);

        res.json(parametro);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteParametro = async (req: Request, res: Response) => {

    const { id } = req.params;

    const parametro = await Parametro.findByPk(id);
    if (!parametro) {
        return res.status(404).json({
            msg: 'No existe un parametro con el id ' + id
        });
    }

    await parametro.update({ estado: false });

    // await parametro.destroy();


    res.json(parametro);
}