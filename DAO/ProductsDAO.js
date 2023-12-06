import ProductsModel from "../Models/ProductsModel.js";

export const findProductByNameDAO = (name) =>
    ProductsModel.find({ name: { $regex: name, $options: "i" } });