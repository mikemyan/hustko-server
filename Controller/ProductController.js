import {
    findProductByNameDAO,
} from "../DAO/ProductsDao.js";

const ProductsController = (app) => {

    app.post("/api/search-products", async (req, res) => {
        const out = await findProductByNameDAO(req.body.name);
        res.json({ success: true, products: out });
    });

};
export default ProductsController;