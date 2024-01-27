const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [isEmail, "Email is not valid"],
        unique: [true, "Email already exist"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    address: {
        type: String,
        required: [true, "address is required"],
    },
    image: {
        type: String,
        default:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU",
    },
});

module.exports = mongoose.model("user", userSchema);
