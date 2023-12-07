import mongoose from "mongoose";
import schema from "./UsersSchema.js";
const model = mongoose.model("users", schema);
export default model;
