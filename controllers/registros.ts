import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Registro from '../models/registro';
import TipoRegistro from '../models/tipo_registro';


export const getRegistros = async (req: Request, res: Response) => {

    const registro = await Registro.findAll({
        include: [TipoRegistro]
    });

    res.json(registro);
}

export const getRegistrosTipo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const registro = await Registro.findAll({
        include: [TipoRegistro],
        where: {
            idTipo: id
        }
    });

    res.json(registro);
}

export const getRegistro = async (req: Request, res: Response) => {

    const { id } = req.params;

    const registro = await Registro.findByPk(id);

    if (registro) {
        res.json(registro);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }


}

export const postRegistro = async (req: Request, res: Response) => {

    const { body } = req;

    try {


        const objeto = Registro.build(body);

        await objeto.save();

        res.json(objeto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putRegistro = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const registro = await Registro.findByPk(id);
        if (!registro) {
            return res.status(404).json({
                msg: 'No existe un registro con el id ' + id
            });
        }

        await registro.update(body);

        res.json(registro);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteRegistro = async (req: Request, res: Response) => {

    const { id } = req.params;

    const registro = await Registro.findByPk(id);
    if (!registro) {
        return res.status(404).json({
            msg: 'No existe un registro con el id ' + id
        });
    }

    await registro.update({ stsPro: false });

    // await registro.destroy();


    res.json(registro);
}