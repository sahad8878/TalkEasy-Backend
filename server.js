
import  dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import messagesRoutes from './routes/messagesRoutes.js'
dotenv.config()

import  './config/connectDB.js'
import { errorHandler, notFound } from './middlewares/errorMiddlwares.js'
const app = express()
app.use(express.json())

app.use(cors({}))

app.use("/api/user",userRoutes)
app.use("/api/chat",chatRoutes)
app.use("/api/messages",messagesRoutes)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`listening on port ${port}`))