import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import User from "../models/user/User";

dotenv.config();
const DATABASE_MODELS = [
    User,
];
class SequelizeAdapter {
    public instance: Sequelize | undefined;

    public async connectDataBase(forceSync?: boolean) {
        const databaseInstance = new Sequelize({
            database: process.env.AUTH_DB,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            port: Number(process.env.POSTGRES_PORT),
            host: process.env.POSTGRES_HOST,
            dialect: "postgres",
            logging: false,
            models: DATABASE_MODELS
        });

        this.instance = databaseInstance;
        try {
            await this.instance.authenticate();
            console.log("PostgreSQL Connection has been established successfully.");
        } catch (error) {
            console.error("Unable to connect to the PostgreSQL database:", error);
        }
    }
}

export default new SequelizeAdapter();