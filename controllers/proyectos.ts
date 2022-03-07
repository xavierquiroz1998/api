import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Proyecto from '../models/proyecto';


export const getProyectos = async (req: Request, res: Response) => {

    const proyectos = await Proyecto.findAll();

    res.json(proyectos);
}

export const getProyecto = async (req: Request, res: Response) => {

    const { id } = req.params;

    const proyecto = await Proyecto.findByPk(id);

    if (proyecto) {
        res.json(proyecto);
    } else {
        res.status(404).json({
            msg: `No existe un proyecto con el id ${id}`
        });
    }


}

export const postProyecto = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeproyecto = await Proyecto.findOne({
            where: {
                codigo: body.codigo
            }
        });

        if (existeproyecto) {
            return res.status(400).json({
                msg: 'Ya existe codigo' + body.codigo
            });
        }




        const proyecto = Proyecto.build(body);

        await proyecto.save();

        res.json(proyecto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putProyecto = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const proyecto = await Proyecto.findByPk(id);
        if (!proyecto) {
            return res.status(404).json({
                msg: 'No existe un proyecto con el id ' + id
            });
        }

        await proyecto.update(body);

        res.json(proyecto);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteProyecto = async (req: Request, res: Response) => {

    const { id } = req.params;

    const proyecto = await Proyecto.findByPk(id);
    if (!proyecto) {
        return res.status(404).json({
            msg: 'No existe un proyecto con el id ' + id
        });
    }

    await proyecto.update({ estado: false });

    // await proyecto.destroy();


    res.json(proyecto);
}