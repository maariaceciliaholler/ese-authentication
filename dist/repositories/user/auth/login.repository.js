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
const zod_1 = require("zod");
const TLogin = zod_1.z.object({
    email: zod_1.z.string().nonempty(),
    password: zod_1.z.string().nonempty(),
});
class LoginRepository {
    authenticateUser(userEmail, userPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateInput({ email: userEmail, password: userPassword });
            const user = yield User_1.default.findOne({ where: { email: userEmail } });
            if (user) {
                const isPasswordValid = yield bcrypt.compare(userPassword, user.password);
                if (isPasswordValid) {
                    return user.id;
                }
                else {
                    throw new Error("Erro. Usuário não encontrado!");
                }
            }
            else {
                throw new Error("Erro. Usuário não encontrado!");
            }
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
    validateInput(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield TLogin.parseAsync(data);
            }
            catch (error) {
                throw new Error("Erro. Os campos obrigatórios devem ser preenchidos corretamente!");
            }
        });
    }
}
exports.default = new LoginRepository();
