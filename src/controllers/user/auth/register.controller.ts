import { Request, Response } from "express";
import RegisterRepository from "../../../repositories/user/auth/register.repository";

async function handleRegisterAdmin(req: Request, res: Response) {
    try {
        const userEmail = req.query.userEmail as string;
        const userName = req.query.userName as string;
        const userCpf = req.query.userCpf as string;
        const userPassword = req.query.userPassword as string;

        const result = await RegisterRepository.registerAdmin(
            userName,
            userCpf,
            userEmail,
            userPassword
        );

        if (result) {
            res.status(200).send({ userId: result });
        } else {
            res.status(400).send({ error: "Erro ao registrar usuário." });
        }
    } catch (ex) {
        console.error("Erro interno:", ex);
        res.status(500).send({ error: "Erro interno no servidor." });
    }
}

export { handleRegisterAdmin };
