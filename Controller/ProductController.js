import * as productdao from "../DAO/ProductsDao.js";

const ProductsController = (app) => {
  const findSearchProduct = async (req, res) => {
    const out = await productdao.findProductByNameDAO(req.body.name);
    res.json({ success: true, products: out });
  };
  const findProductById = async (req, res) => {
    const { productId } = req.params;
    const out = await productdao.findOneProductDAO(productId);
    res.json({ success: true, products: out });
  };
  const createProduct = async (req, res) => {
    const out = await productdao.createProduct(req.body);
    res.json({ success: true, products: out });
  };
  const findAllProducts = async (req, res) => {
    const out = await productdao.findAllProducts();
    res.json({ success: true, products: out });
  };
  const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const status = await productdao.updateProduct(
      req.params.product_id,
      req.body
    );
    res.json(status);
  };
  const deleteProduct = async (req, res) => {
    const status = await productdao.deleteProduct(req.params.product_id);
    res.json(status);
  };

  app.post("/api/search-products", findSearchProduct);
  app.post("/api/products", createProduct);
  app.get("/api/products", findAllProducts);
  app.get("/api/products/:productId", findProductById);
  app.put("/api/products/:productId", updateProduct);
  app.delete("/api/products/:productId", deleteProduct);
};
export default ProductsController;
