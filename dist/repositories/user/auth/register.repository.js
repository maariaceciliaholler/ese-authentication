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
const User_1 = __importDefault(require("../../../models/user/User"));
const bcrypt = require("bcrypt");
class RegisterRepository {
    registerAdmin(userName, userCpf, userEmail, userPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt.hash(userPassword, 10);
            const user = yield User_1.default.create({
                name: userName,
                cpf: userCpf,
                email: userEmail,
                password: hashedPassword,
                createdAt: new Date(),
                createdBy: "system",
            });
            return user.id;
        });
    }
    findAll() {
        throw new Error("Method not implemented.");
    }
    findOne({ id }) {
        throw new Error("Method not implemented.");
    }
    delete({ id }) {
        throw new Error("Method not implemented.");
    }
    create({ data }) {
        throw new Error("Method not implemented.");
    }
    update({ data }) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new RegisterRepository();
