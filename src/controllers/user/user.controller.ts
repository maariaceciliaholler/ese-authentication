import { Request, Response } from "express";
import UserRepository from "../../repositories/user/user.repository";

async function getUserById(req: Request, res: Response) {
    try {
        const userId: any = req.query;
        let found = false;

        for (const key in userId) {
            if (userId.hasOwnProperty(key)) {
                const result = await UserRepository.findUser(key);
                if (result) {
                    res.status(200).send(result);
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            res.status(400).send({ error: "Usuário não encontrado." });
        }
    } catch (ex) {
        console.error("Erro ao buscar usuário por ID:", ex);
        res.status(500).send({ error: "Erro interno no servidor." });
    }
}

async function findAll(req: Request, res: Response) {
    try {
        const findAllResult = await UserRepository.findAll();
        res.status(200).send(findAllResult);
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
        res.status(500).send({ error: "Erro ao buscar usuários." });
    }
}

async function findOne(req: Request, res: Response) {
    const idToFind = req.query.id;
    try {
        const findOneResult = await UserRepository.findOne({ id: idToFind });
        res.status(200).send(findOneResult);
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        res.status(500).send({ error: "Erro ao buscar usuário." });
    }
}

async function create(req: Request, res: Response) {
    try {
        const body = req.body;
        const createResult = await UserRepository.create({ data: body });
        res.status(201).send(createResult);
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).send({ error: "Erro ao criar usuário." });
    }
}

async function update(req: Request, res: Response) {
    try {
        const body = req.query;
        const updateReturn = await UserRepository.update({ data: body });
        if (updateReturn) {
            res.status(200).send({ userId: updateReturn.id });
        } else {
            res.status(400).send({ error: "Não foi possível atualizar o usuário." });
        }
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        res.status(500).send({ error: "Erro ao atualizar usuário." });
    }
}

async function deleteOne(req: Request, res: Response) {
    try {
        const idToFind = req.query.id;
        const deleteReturn = await UserRepository.delete({ id: idToFind });

        if (deleteReturn) {
            res.status(200).send({ message: "Usuário removido com sucesso." });
        } else {
            res.status(400).send({ error: "Não foi possível remover o usuário." });
        }
    } catch (error) {
        console.error("Erro ao remover usuário:", error);
        res.status(500).send({ error: "Erro ao remover usuário." });
    }
}

const UserController = {
    findAll,
    findOne,
    create,
    update,
    deleteOne,
    getUserById,
};

export default UserController;
