const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        Required: [true, "Product should have a name"],
    },
    description: {
        type: String,
        Required: [true, "Product Should have a description"],
    },
    rent: {
        type: Boolean,
        default: false,
    },
    price: {
        type: Number,
        required: [true, "Product should have a price"],
    },
    images: {
        type: [String],
    },
    seller: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: [true, "Product seller id is required"],
    },
});

module.exports = mongoose.model("product", productSchema);
