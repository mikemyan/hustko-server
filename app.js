import express from "express";
import cors from "cors";
import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://hustkoAdmin:ES1SuPktduCOikna@hustko.b7jibdd.mongodb.net/?retryWrites=true&w=majority",
  {}
);
const app = express();
app.use(cors());
app.use(express.json());
app.listen(4000);
