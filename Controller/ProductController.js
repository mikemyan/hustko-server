import * as productdao from "../DAO/ProductsDAO.js";

const ProductsController = (app) => {
  const findSearchProduct = async (req, res) => {
    const out = await productdao.findProductByNameDAO(req.body.name);
    res.json({ success: true, products: out });
  };
  const findProductById = async (req, res) => {
    const out = await productdao.findOneProductDAO(req.params.productId);
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
      req.params.productId,
      req.body
    );
    res.json(status);
  };
  const deleteProduct = async (req, res) => {
    const status = await productdao.deleteProduct(req.params.productId);
    res.json(status);
  };
  const addLikedByUsers = async (req, res) => {
    const { productId, userId } = req.params;
    const status = await productdao.addLikedByUsers(productId, userId);
    res.json(status);
  };
  const deleteLikedByUsers = async (req, res) => {
    const { productId, userId } = req.params;
    const status = await productdao.removeLikedByUsers(productId, userId);
    res.json(status);
  };

  const findProductBySupplierId = async (req, res) => {
    const out = await productdao.findProductBySupplierId(req.params.supplierId);
    res.json(out);
  };

  app.post("/api/search-products", findSearchProduct);
  app.post("/api/products", createProduct);
  app.get("/api/products", findAllProducts);
  app.get("/api/products/:productId", findProductById);
  app.put("/api/products/:productId", updateProduct);
  app.delete("/api/products/:productId", deleteProduct);
  app.put("/api/products/likeduseradd/:productId/:userId", addLikedByUsers);
  app.put(
    "/api/products/likeduserremove/:productId/:userId",
    deleteLikedByUsers
  );
  app.get("/api/products/supplier/:supplierId", findProductBySupplierId);
};
export default ProductsController;
