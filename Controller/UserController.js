import * as dao from "../DAO/UsersDAO.js";
// let currentUser = null;
function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    const currentUser = await dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(status);
  };
  const signup = async (req, res) => {
    const user = await dao.findUserByEmail(req.body.email);
    if (user) {
      res.status(400).json({ message: "Email already taken" });
    } else {
      const newUser = await dao.createUser(req.body);
      const currentUser = newUser;
      req.session["currentUser"] = currentUser;
      res.json(newUser);
    }
  };
  const signin = async (req, res) => {
    const { email, password } = req.body;
    const currentUser = await dao.findUserByCredentials(email, password);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };
  const signout = (req, res) => {
    req.session.destroy();
    res.json(200);
  };
  const account = async (req, res) => {
    res.json(req.session["currentUser"]);
  };
  // const getFavoriteItems = async (req, res) => {
  //   const { userId } = req.params;
  //   const favoriteItems = await dao.getFavoriteItems(userId);
  //   res.json(favoriteItems);
  // };
  const addFavoriteItem = async (req, res) => {
    const { userId, productId } = req.params;
    const status = await dao.addFavoriteItem(userId, productId);
    res.json(status);
  };
  const deleteFavoriteItem = async (req, res) => {
    const { userId, productId } = req.params;
    const status = await dao.removeFavoriteItem(userId, productId);
    res.json(status);
  };
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
  // app.get("/api/users/favorite/:userId", getFavoriteItems);
  app.put("/api/users/favoriteadd/:userId/:productId", addFavoriteItem);
  app.put("/api/users/favoriteremove/:userId/:productId", deleteFavoriteItem);
}
export default UserRoutes;
