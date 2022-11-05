import express from "express";
import { getRestaurants } from "./restaurant-service";

export const restaurantRouter = express.Router();

restaurantRouter.get('/', async (req, res) => {
    const result = await getRestaurants()
    res.send(result)
  })