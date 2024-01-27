const productModel = require("../../model/Product.model");
const asyncHandler = require("express-async-handler");
const userModel = require("../../model/user.model");
const RatingModel = require("../../model/Rating.model");

const getProducts = asyncHandler(async (req, res) => {
    const products = await productModel.find().limit(10);
    res.json(products);
});

const createProduct = asyncHandler(async (req, res) => {
    const { name, description, rent, price, images } = req.body;
    if (!name || !description || !price) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const product = await productModel.create({
        name,
        description,
        rent,
        price,
        images,
        seller: req.body.user.id,
    });
    if (product) {
        res.json(product);
    } else {
        res.status(400);
        throw new Error("Cannot create product");
    }
});

const getProductById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    if (!product) {
        res.status(400);
        throw new Error("invalid Id");
    }
    const seller = await userModel.findById(product.seller);
    const review = await RatingModel.find({ product: id });
    let reviews = [];

    for (let x of review) {
        const buyer = await userModel.findById(x.buyer);
        reviews.push({
            image: buyer.image,
            owner_name: buyer.name,
            rating: x.rating,
            review: x.review,
        });
    }
    res.json({
        id: product.id,
        image: product.images[0],
        price: product.price,
        owner_id: seller.id,
        owner_name: seller.name,
        product_name: product.name,
        hostel_name: seller.address,
        description: product.description,
        rent: product.rent,
        reviews,
    });
});

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, description, rent, price, images } = req.body;
    const product = await productModel.findById(id);
    if (product.seller.toString() !== req.body.user.id) {
        res.status(400);
        throw new Error("You don't have permission to update this product");
    }
    const updatedProduct = await productModel.findByIdAndUpdate(
        id,
        { $set: { name, description, rent, price, images } },
        { new: true }
    );
    if (!updatedProduct) {
        res.status(400);
        throw new Error("Something went wrong");
    }
    res.json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    if (product.seller.toString() !== req.body.user.id) {
        res.status(400);
        throw new Error("You don't have permission to delete this product");
    }
    await productModel.findByIdAndDelete(id);
    res.status(200);
});

const giveRating = async (req, res) => {
    const { rating, review } = req.body;
    const product = req.params.id;
    const buyer = req.body.user.id;
    const response = await RatingModel.create({
        product,
        buyer,
        rating,
        review,
    });
    if (response) {
        res.status(200).json({ success: true });
    } else {
        res.status(400);
        throw new Error("Cannot create review! Something went wrong!");
    }
};

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    giveRating,
};
