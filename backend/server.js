import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares

app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://ecommerce-trend-one-orcin.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use('/api/cart',cartRouter)

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(port, ()=> console.log('Server started on PORT : '+port))