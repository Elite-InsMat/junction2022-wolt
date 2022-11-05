import express from 'express'
import { Server } from "socket.io";
import { port } from './config';
import { getCollections, startDb } from './database';
import { orderRouter } from './orders/orders-handler';
import { itemRouter } from './items/items-handler';
import { restaurantRouter } from './restaurants/restaurant-handler';
import { DatabaseCollections } from './types/database';
import http from 'http';
import cors from 'cors';
import { userRouter } from './users/users-handler';

export let collections: DatabaseCollections;

const startServer = async () => {
  const app = express()
  const server = http.createServer(app);

  // connect mongo
  const db = await startDb()
  if (db) {
    collections = await getCollections(db)
    console.log(`Got ${Object.keys(collections).length} collection(s)!`)
  }

  //start socket
  const io = new Server(server);
  io.on('connected', () => {
    console.log('Socket on!')
  })

  //Middlewares
  app.use(cors())

  //Routers
  app.use('/restaurants',restaurantRouter)
  app.use('/orders',orderRouter)
  app.use('/items', itemRouter)
  app.use('/user', userRouter)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  return app
}

export const app = startServer();