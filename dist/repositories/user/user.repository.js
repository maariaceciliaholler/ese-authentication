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
const User_1 = __importDefault(require("../../models/user/User"));
const zod_1 = require("zod");
const TUser = zod_1.z.object({
    name: zod_1.z.string().nonempty(),
    cpf: zod_1.z.string().nonempty(),
    email: zod_1.z.string().nonempty(),
    password: zod_1.z.string().nonempty(),
    createdAt: zod_1.z.date().optional(),
    createdBy: zod_1.z.string().optional(),
});
class UserRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const findAllResult = yield User_1.default.findAll();
            return findAllResult;
        });
    }
    findOne(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            const findOneResult = yield User_1.default.findOne({ where: { id } });
            return findOneResult;
        });
    }
    delete(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            const deletedRows = yield User_1.default.destroy({ where: { id } });
            if (deletedRows > 0)
                return true;
            return false;
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data }) {
            yield this.validateInput(data);
            const createResult = yield User_1.default.create(data);
            return createResult;
        });
    }
    update(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data }) {
            const [affectedRows] = yield User_1.default.update(data, { where: { id: data.id } });
            if (affectedRows > 0)
                return data;
            return null;
        });
    }
    validateInput(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield TUser.parseAsync(data);
                // CPF validation
                const cleanedCpf = data.cpf.replace(/\D/g, "");
                if (!/^\d{11}$/.test(cleanedCpf)) {
                    throw new Error("Erro. CPF inválido!");
                }
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    throw new Error("Erro. Os campos obrigatórios devem ser preenchidos corretamente!");
                }
                else {
                    throw error;
                }
            }
        });
    }
    updateUser(userId, userName, userCpf, userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.update({
                    name: userName,
                    cpf: userCpf,
                    email: userEmail,
                }, {
                    where: {
                        id: userId,
                    },
                    returning: true,
                });
                if (user) {
                    return user;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    findUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findByPk(id);
                if (user) {
                    return user;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = new UserRepository();
