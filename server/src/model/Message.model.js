const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    senderId: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("message", messageSchema);
