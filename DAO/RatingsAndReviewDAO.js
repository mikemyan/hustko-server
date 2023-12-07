import RatingsAndReviewModel from "../Models/RatingsAndReviewModel.js";

export const findRatingAndReviewByProductId = (productId) => {
    console.log(productId);
    return RatingsAndReviewModel.find({ productId: "656fabcb815235e7f1cd63e8" });
};
