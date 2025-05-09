import { Router } from "express";
import { handleFindAdmin } from "../../controllers/user/auth/login.controller";

const loginRoutes = Router();

loginRoutes.post("/", handleFindAdmin);

export default loginRoutes;
