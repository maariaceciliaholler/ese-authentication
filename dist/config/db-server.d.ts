declare const db: {
    instance: import("sequelize-typescript").Sequelize | undefined;
    connectDataBase(forceSync?: boolean): Promise<void>;
};
export default db;
