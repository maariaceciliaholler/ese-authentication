import SequelizeAdapter from "./config/sequelize"; 
import server from "./adapter/express";
import dotenv from "dotenv";
dotenv.config();

async function startApp() {
  await SequelizeAdapter.connectDataBase(); 

  server.runHttpServer();
}

startApp();
