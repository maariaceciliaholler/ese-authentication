import { Express } from "express";
declare class ExpressServerAdapter {
    expressServer: Express;
    constructor();
    registerMiddlewares(): void;
    runHttpServer(): void;
}
declare const _default: ExpressServerAdapter;
export default _default;
