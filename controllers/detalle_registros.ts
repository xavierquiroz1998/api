import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import DetalleRegistro from '../models/detalle_registro';
import Producto from '../models/producto';
import Registro from '../models/registro';


export const getDetalleRegistros = async (req: Request, res: Response) => {

    const detalle = await DetalleRegistro.findAll({
        include: [Producto, Registro]
    });

    res.json(detalle);
}


export const getDetalleRegistro = async (req: Request, res: Response) => {

    const { id } = req.params;

    const detalle = await DetalleRegistro.findByPk(id);

    if (detalle) {
        res.json(detalle);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }


}

export const getDetalleRegistro2 = async (req: Request, res: Response) => {

    const { id } = req.params;

    const detalle = await DetalleRegistro.findAll({
        where: {
            idRegistro: id
        }
    });

    if (detalle) {
        res.json(detalle);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }


}

export const postDetalleRegistro = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const objeto = DetalleRegistro.build(body);

        await objeto.save();

        res.json(objeto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putDetalleRegistro = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const detalle = await DetalleRegistro.findByPk(id);
        if (!detalle) {
            return res.status(404).json({
                msg: 'No existe un detalle con el id ' + id
            });
        }

        await detalle.update(body);

        res.json(detalle);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteDetalleRegistro = async (req: Request, res: Response) => {

    const { id } = req.params;

    const detalle = await DetalleRegistro.findByPk(id);
    if (!detalle) {
        return res.status(404).json({
            msg: 'No existe un detalle con el id ' + id
        });
    }

    await detalle.update({ stsPro: false });

    // await detalle.destroy();


    res.json(detalle);
}