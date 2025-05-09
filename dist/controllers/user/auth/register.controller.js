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
exports.handleRegisterAdmin = handleRegisterAdmin;
const register_repository_1 = __importDefault(require("../../../repositories/user/auth/register.repository"));
function handleRegisterAdmin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userName, userCpf, userEmail, userPassword } = req.body;
            if (!userName || !userCpf || !userEmail || !userPassword) {
                return res.status(400).send({ error: "Todos os campos são obrigatórios." });
            }
            const result = yield register_repository_1.default.registerAdmin(userName, userCpf, userEmail, userPassword);
            res.status(200).send({ userId: result });
        }
        catch (ex) {
            console.error("Erro interno:", ex);
            res.status(500).send({ error: "Erro interno no servidor." });
        }
    });
}
