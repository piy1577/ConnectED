const { Router } = require("express");
const validateToken = require("../../middleware/validateToken");

const {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    giveRating,
} = require("../controller/product.controller");

const productRouter = Router();

productRouter
    .route("/")
    .get(getProducts) // get product
    .post(validateToken, createProduct); // create product

productRouter
    .route("/:id")
    .get(getProductById) // get product by id
    .put(validateToken, updateProduct) // update product
    .delete(validateToken, deleteProduct) // delete product
    .post(validateToken, giveRating); //give a rating
module.exports = productRouter;
