import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

const app = express()

console.log('Initializing Express Server...')

// middleware to parse json
app.use(express.json()); 

console.log('Configuring CORS...')
app.use(cors())

function logError(err) {
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

console.log('Express Server Initialized!')

// start express server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})



  
  