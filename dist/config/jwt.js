"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret = process.env.JWT_SECRET || "default_jwt_secret";
const jwtExpiration = (process.env.JWT_EXPIRATION || "1d");
function generateToken(payload) {
    const options = {
        expiresIn: jwtExpiration,
    };
    return jsonwebtoken_1.default.sign(payload, jwtSecret, options);
}
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, jwtSecret);
}
