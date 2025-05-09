import RegisterModel from "../../../models/user/interfaces/Register.model";
import IBaseRepository from "../../base.repository";
declare class RegisterRepository implements IBaseRepository<RegisterModel> {
    registerAdmin(userName: any, userCpf: any, userEmail: any, userPassword: any): Promise<number>;
    findAll(): Promise<RegisterModel[]>;
    findOne({ id }: {
        id: string;
    }): Promise<RegisterModel>;
    delete({ id }: {
        id: string;
    }): Promise<boolean>;
    create({ data }: {
        data: RegisterModel;
    }): Promise<RegisterModel>;
    update({ data }: {
        data: RegisterModel;
    }): Promise<RegisterModel>;
}
declare const _default: RegisterRepository;
export default _default;
