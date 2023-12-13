import * as ratingsAndReviewdao from "../DAO/RatingsAndReviewDAO.js";

const RatingsAndReviewController = (app) => {
  const findRatingsAndReviewByProductId = async (req, res) => {
    const out = await ratingsAndReviewdao.findRatingAndReviewByProductId(
      req.params.productId.toString()
    );
    res.json({ success: true, ratingsAndReviews: out });
  };

  const findAverageRatingsByProductId = async (req, res) => {
    const out = await ratingsAndReviewdao.findAverageRatingByProductId(
        req.params.productId.toString()
    );
    res.json({ success: true, averageRating: out });
  };

  const findRatingsAndReviewByUserId = async (req, res) => {
    const out = await ratingsAndReviewdao.findRatingAndReviewByUserId(
      req.params.userId.toString()
    );
    res.json({ success: true, ratingsAndReviews: out });
  };

  const createRatingAndReview = async (req, res) => {
    const out = await ratingsAndReviewdao.createRatingAndReview(req.body);
    res.json(out);
  };

  app.get("/api/ratingsAndReview/product/:productId", findRatingsAndReviewByProductId);
  app.get("/api/ratingsAndReview/product/averageRating/:productId", findAverageRatingsByProductId);
  app.get("/api/ratingsAndReview/user/:userId", findRatingsAndReviewByUserId);
  app.post("/api/ratingsAndReview/product", createRatingAndReview);
};

export default RatingsAndReviewController;
