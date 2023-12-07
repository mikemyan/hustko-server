import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ProductsController from "./Controller/ProductController.js";
mongoose.connect(
  "mongodb+srv://hustkoAdmin:ES1SuPktduCOikna@hustko.b7jibdd.mongodb.net/hustko?retryWrites=true&w=majority",
);
const app = express();
app.use(cors());
app.use(express.json());

ProductsController(app);


app.listen(4000);
