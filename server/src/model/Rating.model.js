const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "product",
    },
    review: {
        type: String,
    },
    rating: {
        type: Number,
    },
});

module.exports = mongoose.model("rating", ratingSchema);
