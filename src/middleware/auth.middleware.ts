import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../config/jwt";

export function authenticateJWT(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ error: "Token não fornecido" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = verifyToken(token);
        (req as any).user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ error: "Token inválido" });
        return;
    }
}
