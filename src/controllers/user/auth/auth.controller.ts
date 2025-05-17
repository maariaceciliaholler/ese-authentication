import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "default_jwt_secret";

export function checkAuth(req: Request, res: Response): void {
    const { token } = req.body;
    if (!token) {
        res.status(401).json(false);
        return;
    }
    try {
        jwt.verify(token, jwtSecret) as JwtPayload;
        console.log("Token válido");
        res.status(200).json(true);
    } catch (err) {
        console.error("Token inválido:", err);
        res.status(401).json(false);
    }
}
