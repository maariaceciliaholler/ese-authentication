import { Router } from "express";
import UserController from "../../controllers/user/user.controller";
import { authenticateJWT } from "../../middleware/auth.middleware";

const userRoutes = Router();

userRoutes.get("/admin/get", authenticateJWT, UserController.getUserById); 
userRoutes.get("/", authenticateJWT, UserController.findAll);
userRoutes.post("/", UserController.create); 
userRoutes.put("/", authenticateJWT, UserController.update); 
userRoutes.delete("/", authenticateJWT, UserController.deleteOne); 

export default userRoutes;
