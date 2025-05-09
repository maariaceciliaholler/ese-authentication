"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
};
class ExpressServerAdapter {
    constructor() {
        const expressInstace = (0, express_1.default)();
        this.expressServer = expressInstace;
    }
    registerMiddlewares() {
        this.expressServer.use((0, cors_1.default)(corsOptions));
        this.expressServer.use(express_1.default.json());
        this.expressServer.use(routes_1.default);
    }
    runHttpServer() {
        const HTTP_PORT = process.env.AUTH_APP_PORT;
        this.registerMiddlewares();
        this.expressServer.listen(HTTP_PORT, () => {
            console.log(`ExpressHttpServer app listening on port ${HTTP_PORT}`);
        });
    }
}
exports.default = new ExpressServerAdapter();
