import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["CUSTOMER", "RETAILER", "ADMIN"],
      default: "CUSTOMER",
    },
    mobile: Number,
    primAddress: String,
    favoriteItems: { type: Array, default: [] },
  },
  { collection: "users" }
);
export default userSchema;
