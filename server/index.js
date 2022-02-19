import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
console.log(process.env.CONNECTION_URL);

app.use("/posts", postRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5001;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
