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
const login_repository_1 = __importDefault(require("../../repositories/user/auth/login.repository"));
const jwt_1 = require("../../config/jwt");
class UserService {
    register(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, cpf, email, password }) {
            const user = yield user_repository_1.default.findOne({ id: email }).catch(() => null);
            if (user) {
                throw new Error("Usuário já registrado com esse email.");
            }
            return yield user_repository_1.default.create({ data: { name, cpf, email, password } });
        });
    }
    login(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            const userId = yield login_repository_1.default.authenticateUser(email, password);
            const token = (0, jwt_1.generateToken)({ id: userId, email });
            return { token };
        });
    }
}
