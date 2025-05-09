import IBaseRepository from "../base.repository";
import User from "../../models/user/User";
import TUserModel from "../../models/user/interfaces/User.model";
declare class UserRepository implements IBaseRepository<TUserModel> {
    findAll(): Promise<TUserModel[]>;
    findOne({ id }: {
        id: any;
    }): Promise<TUserModel | null>;
    delete({ id }: {
        id: any;
    }): Promise<boolean>;
    create({ data }: {
        data: any;
    }): Promise<TUserModel>;
    update({ data }: {
        data: any;
    }): Promise<TUserModel | null>;
    validateInput(data: TUserModel): Promise<void>;
    updateUser(userId: any, userName: any, userCpf: any, userEmail: any): Promise<any>;
    findUser(id: any): Promise<User | null>;
}
declare const _default: UserRepository;
export default _default;
