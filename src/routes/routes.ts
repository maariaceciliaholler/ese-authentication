import { Router } from "express";
import userRoutes from "./user/user.routes"; 

const router = Router();

router.use("/api/user", userRoutes);

export default router;
