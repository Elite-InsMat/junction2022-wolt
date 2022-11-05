import express,  { NextFunction, Request, Response } from 'express'
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

export class BadRequestError extends Error {}
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

  io.emit('new_order')

  app.set('socket.io', io)

  //Middlewares
  app.use(cors())

  //Routers
  app.use('/restaurants',restaurantRouter)
  app.use('/orders',orderRouter)
  app.use('/items', itemRouter)
  app.use('/user', userRouter)

  // Error handler
  app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    switch(error.constructor) {
      case BadRequestError:
          response.status(400).send(error.message);
          break;
      default:
          response.status(500).send(error.message);
          break;
    }
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  return app
}

export const app = startServer();