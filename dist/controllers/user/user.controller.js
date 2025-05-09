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
const user_repository_1 = __importDefault(require("../../repositories/user/user.repository"));
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.query;
            let found = false;
            for (const key in userId) {
                if (userId.hasOwnProperty(key)) {
                    const result = yield user_repository_1.default.findUser(key);
                    if (result) {
                        res.status(200).send(result);
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                res.status(400).send({ error: "Usuário não encontrado." });
            }
        }
        catch (ex) {
            console.error("Erro ao buscar usuário por ID:", ex);
            res.status(500).send({ error: "Erro interno no servidor." });
        }
    });
}
function findAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const findAllResult = yield user_repository_1.default.findAll();
            res.status(200).send(findAllResult);
        }
        catch (error) {
            console.error("Erro ao listar usuários:", error);
            res.status(500).send({ error: "Erro ao buscar usuários." });
        }
    });
}
function findOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const idToFind = req.query.id;
        try {
            const findOneResult = yield user_repository_1.default.findOne({ id: idToFind });
            res.status(200).send(findOneResult);
        }
        catch (error) {
            console.error("Erro ao buscar usuário:", error);
            res.status(500).send({ error: "Erro ao buscar usuário." });
        }
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const body = req.body;
            const createResult = yield user_repository_1.default.create({ data: body });
            res.status(201).send(createResult);
        }
        catch (error) {
            console.error("Erro ao criar usuário:", error);
            res.status(500).send({ error: "Erro ao criar usuário." });
        }
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const body = req.query;
            const updateReturn = yield user_repository_1.default.update({ data: body });
            if (updateReturn) {
                res.status(200).send({ userId: updateReturn.id });
            }
            else {
                res.status(400).send({ error: "Não foi possível atualizar o usuário." });
            }
        }
        catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            res.status(500).send({ error: "Erro ao atualizar usuário." });
        }
    });
}
function deleteOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const idToFind = req.query.id;
            const deleteReturn = yield user_repository_1.default.delete({ id: idToFind });
            if (deleteReturn) {
                res.status(200).send({ message: "Usuário removido com sucesso." });
            }
            else {
                res.status(400).send({ error: "Não foi possível remover o usuário." });
            }
        }
        catch (error) {
            console.error("Erro ao remover usuário:", error);
            res.status(500).send({ error: "Erro ao remover usuário." });
        }
    });
}
const UserController = {
    findAll,
    findOne,
    create,
    update,
    deleteOne,
    getUserById,
};
exports.default = UserController;
