const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asynchandler(async (req, res, next) => {
    const header = req.headers.authorization;
    let token = header.split(" ")[1];
    if (!token) {
        res.status(400);
        throw new Error("Token is missing");
    }
    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401);
            throw new Error("Token is not valid");
        }
        req.body.user = decoded.user;
        next();
    });
});

module.exports = validateToken;
