import TUserModel from "./interfaces/User.model";
import { Model } from "sequelize-typescript";
declare class User extends Model<TUserModel> {
    id: number;
    name: string;
    cpf: string;
    email: string;
    password: string;
    session: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
}
export default User;
