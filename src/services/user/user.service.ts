import UserRepository from "../../repositories/user/user.repository";
import LoginRepository from "../../repositories/user/auth/login.repository";

class UserService {
    async register({ name, cpf, email, password }: {
        name: string;
        cpf: string;
        email: string;
        password: string;
    }) {
        const user = await UserRepository.findOne({ id: email }).catch(() => null);
        if (user) {
            throw new Error("Usuário já registrado com esse email.");
        }

        return await UserRepository.create({ data: { name, cpf, email, password } });
    }

    async login({ email, password }: { email: string; password: string }) {
        const userId = await LoginRepository.authenticateUser(email, password);
        return { token: `fake-jwt-for-user-${userId}` }; 
    }
}