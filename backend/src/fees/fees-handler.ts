import express, { NextFunction, Request, Response  } from 'express';
import { getFee } from "./fees-service";

export const feesRouter = express.Router();

feesRouter.post('/create-delivery-fee', async (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.body.orderId
    try {
        if(!orderId) {
            res.status(400).send('Cannot find any orders!')
            return
        }
        const result = await getFee(orderId)
        res.send(result)
    } catch (error) {
        next(error);
    }
})