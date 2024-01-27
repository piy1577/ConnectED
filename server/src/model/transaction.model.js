const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    orderId: {
        type: String,
    },
    paymentId: {
        type: String,
    },
    product: {
        type: mongoose.Schema.ObjectId,
    },
    buyer: {
        type: mongoose.Schema.ObjectId,
    },
});

module.exports = mongoose.model("transaction", transactionSchema);
