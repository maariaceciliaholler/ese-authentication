import { Sequelize } from "sequelize-typescript";
declare class SequelizeAdapter {
    instance: Sequelize | undefined;
    connectDataBase(forceSync?: boolean): Promise<void>;
}
declare const _default: SequelizeAdapter;
export default _default;
