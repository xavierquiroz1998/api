import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Bodega from '../models/bodega';


export const getBodegas = async (req: Request, res: Response) => {

    const bodegas = await Bodega.findAll();

    res.json({ bodegas });
}

export const getBodega = async (req: Request, res: Response) => {

    const { id } = req.params;

    const bodega = await Bodega.findByPk(id);

    if (bodega) {
        res.json(bodega);
    } else {
        res.status(404).json({
            msg: `No existe un bodega con el id ${id}`
        });
    }


}

export const postBodega = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const bodega = Bodega.build(body);

        await bodega.save();

        res.json(bodega);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putBodega = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const bodega = await Bodega.findByPk(id);
        if (!bodega) {
            return res.status(404).json({
                msg: 'No existe un bodega con el id ' + id
            });
        }

        await bodega.update(body);

        res.json(bodega);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteBodega = async (req: Request, res: Response) => {

    const { id } = req.params;

    const bodega = await Bodega.findByPk(id);
    if (!bodega) {
        return res.status(404).json({
            msg: 'No existe un bodega con el id ' + id
        });
    }

    await bodega.update({ estado: false });

    // await bodega.destroy();


    res.json(bodega);
}