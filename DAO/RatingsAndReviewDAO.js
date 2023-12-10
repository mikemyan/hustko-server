import RatingsAndReviewModel from "../Models/RatingsAndReviewModel.js";

export const findRatingAndReviewByProductId = (productId) => {
  return RatingsAndReviewModel.find({ productId: productId });
};

export const findRatingAndReviewByUserId = (userId) => {
  return RatingsAndReviewModel.find({ userId: userId });
};
