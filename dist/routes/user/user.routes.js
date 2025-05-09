"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../../controllers/user/user.controller"));
const auth_middleware_1 = require("../../middleware/auth.middleware");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/admin/get", auth_middleware_1.authenticateJWT, user_controller_1.default.getUserById);
userRoutes.get("/", auth_middleware_1.authenticateJWT, user_controller_1.default.findAll);
userRoutes.post("/", user_controller_1.default.create);
userRoutes.put("/", auth_middleware_1.authenticateJWT, user_controller_1.default.update);
userRoutes.delete("/", auth_middleware_1.authenticateJWT, user_controller_1.default.deleteOne);
exports.default = userRoutes;
