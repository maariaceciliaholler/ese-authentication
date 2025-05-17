import { Router } from "express";
import { checkAuth } from "../../controllers/user/auth/auth.controller";

const authRoute = Router();
authRoute.post("/", checkAuth);

export default authRoute;