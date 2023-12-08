import * as ratingsAndReviewdao from "../DAO/RatingsAndReviewDao.js";

const RatingsAndReviewController = (app) => {
    const findRatingsAndReviewByProductId = async (req, res) => {
        const out = await ratingsAndReviewdao.findRatingAndReviewByProductId(req.params.productId.toString());
        res.json({ success: true, ratingsAndReviews: out });
    };

    app.get("/api/ratingsAndReview/:productId", findRatingsAndReviewByProductId);
};

export default RatingsAndReviewController;