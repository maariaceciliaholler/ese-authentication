import { Request, Response } from "express";
declare function handleRegisterAdmin(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export { handleRegisterAdmin };
