import express, { NextFunction, Request, Response  } from 'express';
import { CreateOrderPayload, JoinOrderPayload } from '../types/payloads';
import { getUserOrders, createNewOrder, joinOrder, getNearbyOngoingOrders } from "./orders-service";

export const orderRouter = express.Router();

orderRouter.post('/own', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.body.userId) {
      res.status(400).send('Missing userId')
      return
    }
      const result = await getUserOrders(req.body.userId)
      res.send(result)

  } catch (err) {
    console.log(err)
    next(err)
  }
})

orderRouter.post('/create', async (req: Request, res: Response, next: NextFunction) => {
  const order: CreateOrderPayload = req.body.order
  try {
    if(!order) {
      res.status(400).send('Missing order')
      return
    }
  
    const newOrderId = await createNewOrder(order)
    res.send(newOrderId)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

orderRouter.post('/ongoing', async (req: Request, res: Response, next: NextFunction) => {
  try{
    const userId = req.body.userId
    if(!userId) {
      res.status(400).send('Missing userId')
    }

    const orders = await getNearbyOngoingOrders(userId)

    res.send(orders)
    
  } catch(err) {
    console.log(err)
    next(err)
  }
})

orderRouter.post('/join', async (req: Request, res: Response, next: NextFunction) => {
  const order: JoinOrderPayload = req.body.order

  try {
    if(!order) {
      res.status(400).send('Missing order')
      return
    }
    
    await joinOrder(order)

    const io = req.app.get('socket.io')

  } catch (err) {
    console.log(err)
    next(err)
  }
})