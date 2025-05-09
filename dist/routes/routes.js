"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user/user.routes"));
const login_routes_1 = __importDefault(require("./user/login.routes"));
//import registerRoutes from "./user/register.routes";
const router = (0, express_1.Router)();
router.use("/user", user_routes_1.default);
router.use("/auth/login", login_routes_1.default);
//router.use("/auth/register", registerRoutes);
exports.default = router;
