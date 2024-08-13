import express from 'express'
import dotenv from 'dotenv'
import convertRouter from './routes/convert.js'
import cors from 'cors'
dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())
app.use('/convert',convertRouter)
const PORT=process.env.PORT||5000

app.listen(PORT,()=>console.log(`app is running on port ${PORT}`))