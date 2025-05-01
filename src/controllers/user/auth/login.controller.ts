import { Request, Response } from "express";
import LoginRepository from "../../../repositories/user/auth/login.repository";

async function handleFindAdmin(req: Request, res: Response) {
    try {
        const userEmail = req.query.userEmail as string;
        const userPassword = req.query.userPassword as string;

        if (!userEmail || !userPassword) {
            res.status(400).send({ error: "Parâmetro obrigatório ausente." });
            return; 
        }

        const userId = await LoginRepository.authenticateUser(userEmail, userPassword);

        if (userId) {
            res.status(200).send({ userId: userId });
        } else {
            res.status(400).send({ error: "Usuário não encontrado." });
        }
    } catch (ex) {
        console.error("Erro interno:", ex);
        res.status(500).send({ error: "Erro interno no servidor." });
    }
}

export { handleFindAdmin };
