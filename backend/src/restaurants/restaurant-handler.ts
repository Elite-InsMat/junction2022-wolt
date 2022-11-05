import express, { NextFunction, Request, Response  } from 'express';
import { getRestaurants } from "./restaurant-service";

export const restaurantRouter = express.Router();

restaurantRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getRestaurants()

    const io = req.app.get('socket.io')
    io.emit('test1',result)

    res.send(result)
  } catch (err) {
    console.log(err)
    next(err)
  }
})