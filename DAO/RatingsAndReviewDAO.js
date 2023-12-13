import RatingsAndReviewModel from "../Models/RatingsAndReviewModel.js";

export const findRatingAndReviewByProductId = (productId) => {
  return RatingsAndReviewModel.find({ productId: productId });
};

export const findAverageRatingByProductId = (productId) => {
    return RatingsAndReviewModel.aggregate([
                                               {
                                                   $match: {
                                                       productId: productId
                                                   }
                                               },
                                               {
                                                   $group: {
                                                       _id: '$productId',
                                                       averageRating: { $avg: '$ratings' }
                                                   }
                                               }
                                           ])
        .exec()
        .then((result) => {
            const averageRating = result.length > 0 ? result[0].averageRating : 0;
            console.log('Average Rating for Product with ID', productId, ':', averageRating);
            return averageRating;
        })
        .catch((err) => {
            console.error(err);
            throw err;
        });
};


export const findRatingAndReviewByUserId = (userId) => {
  return RatingsAndReviewModel.find({ userId: userId });
};

export const createRatingAndReview = (ratingAndReview) => {
  return RatingsAndReviewModel.create(ratingAndReview);
};
