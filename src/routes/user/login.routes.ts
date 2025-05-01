import { Router } from "express";
import { handleFindAdmin } from "../../controllers/user/auth/login.controller";

const loginRoutes = Router();

loginRoutes.get("/admin/login", handleFindAdmin);

export default loginRoutes;