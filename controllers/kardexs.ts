import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Kardex from '../models/kardex';
import Producto from '../models/producto';


export const getKardexs = async (req: Request, res: Response) => {

    const kardexs = await Kardex.findAll({ include: [Producto] });

    res.json(kardexs);
}



export const getKardex = async (req: Request, res: Response) => {

    const { id } = req.params;

    const kardex = await Kardex.findByPk(id);

    if (kardex) {
        res.json(kardex);
    } else {
        res.status(404).json({
            msg: `No existe un kardex con el id ${id}`
        });
    }

}

export const getKardexProducto = async (req: Request, res: Response) => {

    const { id } = req.params;

    const kardex = await Kardex.findAll(
        {
            include: [Producto],
            where: {
                idProducto: id
            }
        }
    );

    res.json(kardex);
}

export const postKardex = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const kardex = Kardex.build(body);

        await kardex.save();

        res.json(kardex);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putKardex = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const kardex = await Kardex.findByPk(id);
        if (!kardex) {
            return res.status(404).json({
                msg: 'No existe un kardex con el id ' + id
            });
        }

        await kardex.update(body);

        res.json(kardex);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteKardex = async (req: Request, res: Response) => {

    const { id } = req.params;

    const kardex = await Kardex.findByPk(id);
    if (!kardex) {
        return res.status(404).json({
            msg: 'No existe un kardex con el id ' + id
        });
    }

    await kardex.update({ estado: false });

    // await kardex.destroy();


    res.json(kardex);
}