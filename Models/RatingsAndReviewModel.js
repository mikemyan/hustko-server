import mongoose from "mongoose";

const schema = mongoose.Schema({
  userId: { type: String },
  productId: { type: String },
  ratings: { type: Number },
  review: { type: String },
});

export default mongoose.model("ratingsandreviews", schema);
