import model from "../Models/UsersModel.js";
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByEmail = (email) => model.findOne({ email: email });
export const findUserByCredentials = (email, password) =>
  model.findOne({ email, password });
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
export const addFavoriteItem = (userId, productId) =>
  model.updateOne({ _id: userId }, { $push: { favoriteItems: productId } });
export const removeFavoriteItem = (userId, productId) =>
  model.updateOne({ _id: userId }, { $pull: { favoriteItems: productId } });
