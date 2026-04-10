import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import productRoute from './routes/product.js'
import userRoute from './routes/user.js'
import dbConn from './db/dbConn.js'
dotenv.config({})

dbConn()


const app=express()

app.use(express.json())
app.use(cors());

app.use('/api',productRoute)
app.use('/api/user',userRoute)

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('server is running on ',PORT)
})