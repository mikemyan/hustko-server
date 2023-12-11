import * as ratingsAndReviewdao from "../DAO/RatingsAndReviewDAO.js";

const RatingsAndReviewController = (app) => {
  const findRatingsAndReviewByProductId = async (req, res) => {
    const out = await ratingsAndReviewdao.findRatingAndReviewByProductId(
      req.params.productId.toString()
    );
    res.json({ success: true, ratingsAndReviews: out });
  };

  const findRatingsAndReviewByUserId = async (req, res) => {
    const out = await ratingsAndReviewdao.findRatingAndReviewByUserId(
      req.params.userId.toString()
    );
    res.json({ success: true, ratingsAndReviews: out });
  };

  app.get(
    "/api/ratingsAndReview/product/:productId",
    findRatingsAndReviewByProductId
  );
  app.get("/api/ratingsAndReview/user/:userId", findRatingsAndReviewByUserId);
};

export default RatingsAndReviewController;
