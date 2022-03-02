import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Proveedor from '../models/proveedor';


export const getProveedores = async (req: Request, res: Response) => {

    const provedores = await Proveedor.findAll();

    res.json({ provedores });
}

export const getProveedor = async (req: Request, res: Response) => {

    const { id } = req.params;

    const proveedor = await Proveedor.findByPk(id);

    if (proveedor) {
        res.json(proveedor);
    } else {
        res.status(404).json({
            msg: `No existe un proveedor con el id ${id}`
        });
    }


}

export const postProveedor = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeproveedor = await Proveedor.findOne({
            where: {
                codigo: body.codigo
            }
        });

        if (existeproveedor) {
            return res.status(400).json({
                msg: 'Ya existe codigo' + body.codigo
            });
        }




        const proveedor = Proveedor.build(body);

        await proveedor.save();

        res.json(proveedor);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putProveedor = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const proveedor = await Proveedor.findByPk(id);
        if (!proveedor) {
            return res.status(404).json({
                msg: 'No existe un proveedor con el id ' + id
            });
        }

        await proveedor.update(body);

        res.json(proveedor);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteProveedor = async (req: Request, res: Response) => {

    const { id } = req.params;

    const proveedor = await Proveedor.findByPk(id);
    if (!proveedor) {
        return res.status(404).json({
            msg: 'No existe un proveedor con el id ' + id
        });
    }

    await proveedor.update({ estado: false });

    // await proveedor.destroy();


    res.json(proveedor);
}