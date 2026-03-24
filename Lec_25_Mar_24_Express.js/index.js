import express from 'express'
import dotenv from 'dotenv'
import productRoute from './routes/product.js'

dotenv.config({})

const app=express()

app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/ssr',(req,res)=>{
    res.render('index', { title: 'Home Page', message: 'Welcome to EJS with Express!' })
})

app.use('/api',productRoute)

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('server is running on ',PORT)
})