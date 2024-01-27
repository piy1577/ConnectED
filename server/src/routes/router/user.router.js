const { Router } = require("express");
const {
    register,
    login,
    current,
    updateUser,
    changePassword,
    getCart,
    getById,
    updateImage,
} = require("../controller/user.controller");
const validateToken = require("../../middleware/validateToken");

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter
    .route("/")
    .get(validateToken, current) // get info of current user
    .put(validateToken, updateUser); // update info of current user

userRouter.post("/change-password", validateToken, changePassword); //change-password
userRouter.post("/update-image", validateToken, updateImage); //update-image
userRouter.get("/cart", validateToken, getCart); //get Cart
userRouter.get("/:id", getById); // get User by Id

module.exports = userRouter;
