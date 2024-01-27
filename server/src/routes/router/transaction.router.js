const { Router } = require("express");
const {
    checkout,
    paymentVerification,
} = require("../controller/transaction.controller");
const validateToken = require("../../middleware/validateToken");

const transactionRouter = Router();

transactionRouter.post("/checkout", validateToken, checkout);
transactionRouter.post("/paymentVerification", paymentVerification);

module.exports = transactionRouter;
