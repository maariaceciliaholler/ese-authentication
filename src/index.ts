import SequelizeAdapter from "./config/sequelize"; 
import server from "./adapter/express";

async function startApp() {
  await SequelizeAdapter.connectDataBase(); 

  server.runHttpServer();
}

startApp();
