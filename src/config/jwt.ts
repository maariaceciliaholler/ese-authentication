import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { StringValue } from "ms"; 

const jwtSecret: Secret = process.env.JWT_SECRET || "default_jwt_secret";
const jwtExpiration: StringValue = (process.env.JWT_EXPIRATION || "1d") as StringValue;

export function generateToken(payload: object): string {
    const options: SignOptions = {
        expiresIn: jwtExpiration,
    };
    console.log("JWT_SECRET usado para gerar o token:", jwtSecret);
    return jwt.sign(payload, jwtSecret, options);
}

export function verifyToken(token: string) {
    return jwt.verify(token, jwtSecret);
}
