import ProductsModel from "../Models/ProductsModel.js";

export const findProductByNameDAO = (name) =>
  ProductsModel.find({ name: { $regex: name, $options: "i" } });

export const findAllProducts = () => ProductsModel.find();
export const findOneProductDAO = (productId) =>
  ProductsModel.findById(productId);

export const createProduct = (product) => ProductsModel.create(product);
export const updateProduct = (productId, product) =>
  ProductsModel.updateOne({ _id: productId }, { $set: product });
export const deleteProduct = (productId) =>
    ProductsModel.deleteOne({ _id: productId });
