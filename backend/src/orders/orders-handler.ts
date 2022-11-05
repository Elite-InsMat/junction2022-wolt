import express from "express";
import { getOrders } from "./orders-service";

export const orderRouter = express.Router();

orderRouter.get('/', async (req, res) => {
  if(!req.body.userId) {
    res.status(400).send('Missing userId')
  }
    const result = await getOrders(req.body.userId)
    res.send(result)
  })