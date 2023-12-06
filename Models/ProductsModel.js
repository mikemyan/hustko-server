import mongoose from "mongoose";

const schema = mongoose.Schema({
                                   name: { type: String, required: true },
                                   image: { type: String, required: true },
                                   price: { type: String, required: true },
                                   manufacturer: { type: String }
                               });

export default mongoose.model("products", schema);