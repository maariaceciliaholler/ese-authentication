import { Request, Response } from "express";
import RegisterRepository from "../../../repositories/user/auth/register.repository";

async function handleRegisterAdmin(req: Request, res: Response) {
    try {
        const { userName, userCpf, userEmail, userPassword } = req.body;

        if (!userName || !userCpf || !userEmail || !userPassword) {
            res.status(400).send({ error: "Todos os campos são obrigatórios." });
        }

        const result = await RegisterRepository.registerAdmin(
            userName,
            userCpf,
            userEmail,
            userPassword
        );

        res.status(200).send({ userId: result });
    } catch (ex) {
        console.error("Erro interno:", ex);
        res.status(500).send({ error: "Erro interno no servidor." });
    }
}

export { handleRegisterAdmin };
