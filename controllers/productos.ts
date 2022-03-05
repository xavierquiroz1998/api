import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Grupo from '../models/grupo';
import Producto from '../models/producto';
import Proveedor from '../models/proveedor';
import Unidad from '../models/unidad';


export const getProductos = async (req: Request, res: Response) => {

    const producto = await Producto.findAll();

    res.json({ producto });
}


export const getProductosExt = async (req: Request, res: Response) => {

    const producto = await Producto.findAll({
        include: [Proveedor, Unidad, Grupo]
    });

    res.json(producto);
}

export const getProducto = async (req: Request, res: Response) => {

    const { id } = req.params;

    const producto = await Producto.findByPk(id);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }


}



export const postProducto = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeReferencia = await Producto.findOne({
            where: {
                referencia: body.referencia
            }
        });

        if (existeReferencia) {
            return res.status(400).json({
                msg: 'Ya existe es codigo de referencia ' + body.referencia
            });
        }




        const objeto = Producto.build(body);

        await objeto.save();

        res.json(objeto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putProducto = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }

        await producto.update(body);

        res.json(producto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteProducto = async (req: Request, res: Response) => {

    const { id } = req.params;

    const producto = await Producto.findByPk(id);
    if (!producto) {
        return res.status(404).json({
            msg: 'No existe un producto con el id ' + id
        });
    }

    await producto.update({ estado: false });

    // await producto.destroy();

    res.json(producto);
}