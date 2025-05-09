"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function runHttpServer() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use("/api/user", routes_1.default);
    app.use("/api", routes_1.default);
    const PORT = process.env.AUTH_APP_PORT || 3000;
    app.listen(PORT, () => {
        console.log(`ExpressHttpServer app listening on port ${PORT}`);
    });
}
exports.default = { runHttpServer };
