import express from 'express'
import { Server } from "socket.io";
import { port } from './config';
import { getCollections, startDb } from './database';
import { restaurantRouter } from './restaurants/restaurant-handler';
import { DatabaseCollections } from './types/database';

export let collections: DatabaseCollections;

const startServer = async () => {
  const app = express()
  const db = await startDb()

  if (db) {
    collections = await getCollections(db)
    console.log(`Got ${Object.keys(collections).length} collections!`)
  }

  //Routers
  app.use('/restaurants',restaurantRouter)

  const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  // const io = new Server(server);

  // io.on('connect', (socket) => {
  //   console.log('connected to socket')
  // })
  return app
}

export const app = startServer();