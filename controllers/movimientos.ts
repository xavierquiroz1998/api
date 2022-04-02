import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Movimiento from '../models/movimiento';


export const getMovimientos = async (req: Request, res: Response) => {

    const movimiento = await Movimiento.findAll();

    res.json(movimiento);
}

export const getMovimiento = async (req: Request, res: Response) => {

    const { id } = req.params;

    const movimiento = await Movimiento.findByPk(id);

    if (movimiento) {
        res.json(movimiento);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }


}

export const postMovimiento = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const objeto = Movimiento.build(body);

        await objeto.save();

        res.json(objeto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putMovimiento = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const movimiento = await Movimiento.findByPk(id);
        if (!movimiento) {
            return res.status(404).json({
                msg: 'No existe un movimiento con el id ' + id
            });
        }

        await movimiento.update(body);

        res.json(movimiento);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteMovimiento = async (req: Request, res: Response) => {

    const { id } = req.params;

    const movimiento = await Movimiento.findByPk(id);
    if (!movimiento) {
        return res.status(404).json({
            msg: 'No existe un movimiento con el id ' + id
        });
    }

    await movimiento.update({ stsPro: false });

    // await movimiento.destroy();


    res.json(movimiento);
}