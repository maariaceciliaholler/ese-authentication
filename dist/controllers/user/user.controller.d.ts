import { Request, Response } from "express";
declare function getUserById(req: Request, res: Response): Promise<void>;
declare function findAll(req: Request, res: Response): Promise<void>;
declare function findOne(req: Request, res: Response): Promise<void>;
declare function create(req: Request, res: Response): Promise<void>;
declare function update(req: Request, res: Response): Promise<void>;
declare function deleteOne(req: Request, res: Response): Promise<void>;
declare const UserController: {
    findAll: typeof findAll;
    findOne: typeof findOne;
    create: typeof create;
    update: typeof update;
    deleteOne: typeof deleteOne;
    getUserById: typeof getUserById;
};
export default UserController;
