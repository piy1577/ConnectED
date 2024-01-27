const Razorpay = require("razorpay");
const asynchandler = require("express-async-handler");
const crypto = require("crypto");
const transactionModel = require("../../model/transaction.model");

const instance = new Razorpay({
    key_id: process.env.key_id,
    key_secret: process.env.key_secret,
});

const checkout = asynchandler(async (req, res) => {
    const amount = Number(req.body.amount) * 100;
    const option = {
        amount,
        currency: "INR",
    };
    const order = await instance.orders.create(option);
    if (!order) {
        throw new Error("Order Creation failed");
    }
    res.json({ ...order, key: process.env.key_id });
});

const paymentVerification = asynchandler(async (req, res) => {
    const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
        product,
        buyer,
    } = req.body;

    const shasum = crypto.createHmac("sha256", process.env.key_secret);
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest("hex");

    if (digest !== razorpaySignature)
        return res.status(400).json({ msg: "Transaction not legit!" });

    const order = await transactionModel.create({
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        product,
        buyer,
    });
    res.json(order);
});

module.exports = { checkout, paymentVerification };
