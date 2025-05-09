"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../../controllers/user/auth/login.controller");
const loginRoutes = (0, express_1.Router)();
loginRoutes.get("/", login_controller_1.handleFindAdmin);
exports.default = loginRoutes;
