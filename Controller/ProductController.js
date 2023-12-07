import {
    findOneProductDAO,
    findProductByNameDAO,
} from "../DAO/ProductsDao.js";

const ProductsController = (app) => {

    app.post("/api/search-products", async (req, res) => {
        const out = await findProductByNameDAO(req.body.name);
        res.json({ success: true, products: out });
    });

    app.post("/api/product", async (req, res) => {
        const out = await findOneProductDAO(req.body.id);
        res.json({ success: true, products: out });
    });

};
export default ProductsController;