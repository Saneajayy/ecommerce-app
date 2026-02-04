import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

app.set("trust proxy", 1);

connectDB();
connectCloudinary();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ecommerce-frontend-one-orcin.vercel.app",
      "https://ecommerce-frontend-git-main-ajay-kumars-projects-2102f263.vercel.app",
      "https://ecommerce-backend-one-lake.vercel.app"

    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// ✅ REQUIRED for Vercel / browsers
app.options("*", cors());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () =>
  console.log("Server started on PORT:", port)
);
