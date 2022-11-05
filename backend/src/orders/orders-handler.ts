import express from "express";
import { getOrders } from "./orders-service";

export const orderRouter = express.Router();

orderRouter.get('/', async (req, res) => {
    const result = await getOrders()
    res.send(result)
  })