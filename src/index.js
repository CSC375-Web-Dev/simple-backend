import express from 'express'
// import cors from 'cors'
// import * as dotenv from 'dotenv'

// dotenv.config()

const app = express()

console.log('Initializing Express Server...')

// // middleware to parse json
// app.use(express.json()); 

// console.log('Configuring CORS...')
// app.use(cors())

// function logError(err) {
//   if (err instanceof Error) {
//     console.error(`${err.message}\n\n${err.stack}`)
//   }
//   else {
//     console.error(`ERROR: ${err}`)
//   }
// }

console.log('Defining endpoint GET /ping')
app.get('/ping', (req, res) => {
  //try {
    res.status(200).json({ message: 'pong' })
  //}
  // catch(err) {
  //   //logError(err)
  //   res.status(500).json({ error: 'something went wrong' })
  // }
})

// console.log('Defining endpoint GET /message')
// app.get('/message', (req, res) => {
//   try {
//     res.status(200).json({ message: process.env.message })
//   }
//   catch(err) {
//     //logError(err)
//     res.status(500).json({ error: 'something went wrong' })
//   }
// })

console.log('Express Server Initialized!')

// start express server
const port = process.env.PORT || 3000
console.log(`Using port ${port}`)
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})



  
  