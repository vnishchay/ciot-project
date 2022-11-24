import 'dotenv/config'
import { DatabaseConnection } from './dbConfig.js'
import express from 'express'
import User from './model.js'
import errorHandler from './errorMiddleWare.js'
import userRouter from './routes.js'

import cors from 'cors'

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}



const PORT = process.env.PORT || 5000
const app = express()
 
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

DatabaseConnection()


app.use('/api', userRouter)

app.use(errorHandler)

app.use(cors(corsOptions)) 
app.listen(PORT, () => {
  console.log(`server running on  :  ${PORT}`)
})
