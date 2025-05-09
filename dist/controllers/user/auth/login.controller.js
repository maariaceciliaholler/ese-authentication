"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFindAdmin = handleFindAdmin;
const login_repository_1 = __importDefault(require("../../../repositories/user/auth/login.repository"));
function handleFindAdmin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userEmail = req.query.userEmail;
            const userPassword = req.query.userPassword;
            if (!userEmail || !userPassword) {
                res.status(400).send({ error: "Parâmetro obrigatório ausente." });
                return;
            }
            const userId = yield login_repository_1.default.authenticateUser(userEmail, userPassword);
            if (userId) {
                res.status(200).send({ userId: userId });
            }
            else {
                res.status(400).send({ error: "Usuário não encontrado." });
            }
        }
        catch (ex) {
            console.error("Erro interno:", ex);
            res.status(500).send({ error: "Erro interno no servidor." });
        }
    });
}
