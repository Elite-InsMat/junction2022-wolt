import express, { NextFunction, Request, Response  } from 'express';
import { getItems } from "./items-service";

export const itemRouter = express.Router();

itemRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const restaurantId = req.body.restaurantId
    try {
        if(!restaurantId) {
            res.status(400).send('Cannot find any restaurants!')
            return
        }
        const result = await getItems(restaurantId)
        res.send(result)
    } catch (error) {
        next(error);
    }
})