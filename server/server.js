import expres from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDB from "./db/ConnectDB.js";
import userRoutes from "./routes/user.routes.js";
import productRoute from "./routes/product.routes.js"
import cookieParser from "cookie-parser"

const app = expres();

dotenv.config();

app.use(cors());
app.use(expres.json());
app.use(cookieParser());
app.use(expres.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoute);

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`.bgBlack.underline);
    });
  })
  .catch((err) => {
    console.log("Database Connection error".bgGreen.underline);
    console.log(err.message);
  });
