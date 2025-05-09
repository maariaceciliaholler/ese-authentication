import { Router } from "express";
import userRoutes from "./user/user.routes";
import loginRoutes from "./user/login.routes";
import registerRoutes from "./user/register.routes";

const router = Router();

router.use("/user", userRoutes);  
router.use("/auth/login", loginRoutes);
router.use("/auth/register", registerRoutes);

export default router;
