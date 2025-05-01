import { Router } from "express";
import { handleRegisterAdmin } from "../../controllers/user/auth/register.controller";

const registerRoutes = Router();

registerRoutes.post("/admin/register", handleRegisterAdmin);

export default registerRoutes;