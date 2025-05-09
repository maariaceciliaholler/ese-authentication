import { Request, Response } from "express";
import LoginRepository from "../../../repositories/user/auth/login.repository";

async function handleFindAdmin(req: Request, res: Response) {
    try {
        const { userEmail, userPassword } = req.body;

        if (!userEmail || !userPassword) {
            res.status(400).send({ error: "Todos os campos são obrigatórios." });
        }

        const userId = await LoginRepository.authenticateUser(userEmail, userPassword);

        res.status(200).send({ userId });
    } catch (ex) {
        console.error("Erro interno:", ex);
        res.status(500).send({ error: "Erro interno no servidor." });
    }
}

export { handleFindAdmin };
