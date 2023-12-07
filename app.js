import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
// const CONNECTION_STRING =
//   process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
const CONNECTION_STRING =
  "mongodb+srv://hustkoAdmin:ES1SuPktduCOikna@hustko.b7jibdd.mongodb.net/hustko?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
app.listen(process.env.PORT || 4000);
