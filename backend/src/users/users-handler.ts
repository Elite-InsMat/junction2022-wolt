import express, { NextFunction, Request, Response  } from 'express';
import { getUser } from "./users-service";

export const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const userName = req.body.userName
    try {
        if(!userName) {
            res.status(400).send('Cannot find any user data!')
            return
        }
        const result = await getUser(userName)
        res.send(result)
    } catch (error) {
        next(error);
    }
})