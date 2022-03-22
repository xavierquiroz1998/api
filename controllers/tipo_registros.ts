import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Tipo from '../models/tipo_registro';


export const getTipos = async (req: Request, res: Response) => {

    const tipo = await Tipo.findAll();

    res.json(tipo);
}

export const getTipo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tipo = await Tipo.findByPk(id);

    if (tipo) {
        res.json(tipo);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }


}

export const postTipo = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const exite = await Tipo.findOne({
            where: {
                codigo: body.codigo
            }
        });

        if (exite) {
            return res.status(400).json({
                msg: 'Ya existe codigo' + body.codigo
            });
        }




        const objeto = Tipo.build(body);

        await objeto.save();

        res.json(objeto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putTipo = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const tipo = await Tipo.findByPk(id);
        if (!tipo) {
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            });
        }

        await tipo.update(body);

        res.json(tipo);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteTipo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tipo = await Tipo.findByPk(id);
    if (!tipo) {
        return res.status(404).json({
            msg: 'No existe un tipo con el id ' + id
        });
    }

    await tipo.update({ stsPro: false });

    // await tipo.destroy();


    res.json(tipo);
}