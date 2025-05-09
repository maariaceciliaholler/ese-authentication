import LoginModel from "../../../models/user/interfaces/Login.model";
import IBaseRepository from "../../base.repository";
declare class LoginRepository implements IBaseRepository<LoginModel> {
    authenticateUser(userEmail: string, userPassword: string): Promise<number | null>;
    findAll(): Promise<LoginModel[]>;
    findOne({ id }: {
        id: string;
    }): Promise<LoginModel>;
    delete({ id }: {
        id: string;
    }): Promise<boolean>;
    create({ data }: {
        data: LoginModel;
    }): Promise<LoginModel>;
    update({ data }: {
        data: LoginModel;
    }): Promise<LoginModel>;
    validateInput(data: any): Promise<void>;
}
declare const _default: LoginRepository;
export default _default;
