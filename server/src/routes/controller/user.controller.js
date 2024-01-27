const bcrypt = require("bcrypt");
const userModel = require("../../model/user.model.js");
const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const ProductModel = require("../../model/Product.model.js");
const transactionModel = require("../../model/transaction.model.js");

const register = asynchandler(async (req, res) => {
    const { name, email, password, address } = req.body;
    if (!name || !email || !password || !address) {
        res.status(400);
        throw new Error("All field not filled");
    }
    const userAvailable = await userModel.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("user already exist");
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
        name,
        email,
        address,
        password: hashedPassword,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU",
    });
    const token = jwt.sign(
        {
            user: {
                id: user.id,
                name,
                email,
                address,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU",
            },
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );
    res.json({ token });
});

const login = asynchandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All field not filled");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error("user does not exist");
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
            {
                user: {
                    id: user.id,
                    name: user.name,
                    email,
                    address: user.address,
                    image: user.image,
                },
            },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );
        res.json({ token });
    } else {
        res.status(401);
        throw new Error("Password does not match");
    }
});

const current = asynchandler(async (req, res) => {
    res.json(req.body.user);
});

const updateUser = asynchandler(async (req, res) => {
    const { name, email, address } = req.body;
    const { id } = req.body.user;
    const user = await userModel.findByIdAndUpdate(
        id,
        { $set: { name, email, address } },
        { new: true }
    );
    res.json(user);
});

const changePassword = asynchandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.body.user;
    const oldUser = await userModel.findById(id);
    if (await bcrypt.compare(oldPassword, oldUser.password)) {
        res.status(400);
        throw new Error("Password doesn't match");
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    const user = await userModel.findByIdAndUpdate(id, {
        $set: { password: hashedPassword },
    });
    res.json(user);
});

const getCart = asynchandler(async (req, res) => {
    const { id } = req.body.user;
    const cart = await ProductModel.find({ seller: id });
    const cart2 = await transactionModel.find({ buyer: id });
    let carts = { sell: [], rent: [], bought: [], rented: [] };
    for (let x of cart) {
        if (x.rent) {
            carts.rent.push(x);
        } else {
            carts.sell.push(x);
        }
    }
    for (let x of cart2) {
        const obj = await ProductModel.findById(x.product);
        if (obj.rent) {
            carts.rented.push(obj);
        } else {
            carts.bought.push(obj);
        }
    }
    res.json(carts);
});

const getById = asynchandler(async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user) {
        res.status(400);
        throw new Error("user does not exists");
    }
    res.json({
        name: user.name,
        email: user.name,
        address: user.address,
        id: user.id,
    });
});

const updateImage = asynchandler(async (req, res) => {
    const { id } = req.body.user;
    const { image } = req.body;
    const user = await userModel.findByIdAndUpdate(id, {
        $set: { image },
    });
    res.json(user);
});

module.exports = {
    register,
    login,
    current,
    updateUser,
    changePassword,
    getCart,
    getById,
    updateImage,
};
