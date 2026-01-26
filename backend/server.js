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

app.set('trust proxy', 1);

// middlewares

app.use(express.json())
app.use(cors(
    {
        origin : ['https://ecommerce-frontend-one-orcin.vercel.app'],
        credentials: true,

    }
))
app.use('/api/cart',cartRouter)

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(port, ()=> console.log('Server started on PORT : '+port))