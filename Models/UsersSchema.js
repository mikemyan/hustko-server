import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    dob: {
      type: Date,
      default: '2000-02-22',
    },
    role: {
      type: String,
      enum: ['USER', 'SUPPLIER', 'ADMIN'],
      default: 'USER',
    },
    mobile: Number,
    primAddress: String,
    favoriteItems: { type: Array, default: [] },
  },
  { collection: 'users' }
);
export default userSchema;
