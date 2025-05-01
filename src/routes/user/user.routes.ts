import { Router } from "express";
import UserController from "../../controllers/user/user.controller";

const userRoutes = Router();

userRoutes.get("/admin/get", UserController.getUserById);
userRoutes.get("/", UserController.findAll);
userRoutes.post("/", UserController.create);
userRoutes.put("/", UserController.findOne);
userRoutes.delete("/", UserController.deleteOne);

export default userRoutes;
