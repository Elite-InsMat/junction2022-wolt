import express, { NextFunction, Request, Response  } from 'express';
import { ItemsResponse } from '../types/responses';
import { getItems } from "./items-service";

export const itemRouter = express.Router();

itemRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const restaurant = req.body.restaurantId
    try {
        if(!restaurant) {
            res.send('Cannot find any restaurants!')
            return
        }
        const result: ItemsResponse = await getItems(restaurant)
        res.send(result)
    } catch (error) {
        next(error);
    }
})