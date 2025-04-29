import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3000

const main = async () => {
  await initializeServer()
}
  
const initializeServer = async () => {
  console.log('Initializing Express Server...')
  
  // middleware to parse json
  app.use(express.json()); 

  console.log('Configuring CORS...')
  app.use(cors())

  function logError() {
    if (err instanceof Error) {
      console.error(`${err.message}\n\n${err.stack}`)
    }
    else {
      console.error(`ERROR: ${err}`)
    }
  }

  console.log('Defining endpoint GET /ping')
  app.get('/ping', async (req, res) => {
    try {
      return res.status(200).json({ message: 'pong' })
    }
    catch(err) {
      logError(err)
      return res.status(500).json({ error: 'something went wrong' })
    }
  })

  console.log('Defining endpoint GET /message')
  app.get('/message', async (req, res) => {
    try {
      return res.status(200).json({ message: process.env.message })
    }
    catch(err) {
      logError(err)
      return res.status(500).json({ error: 'something went wrong' })
    }
  })

  // start express server
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })

  console.log('Express Server Initialized!')
}

main()
  
  
  