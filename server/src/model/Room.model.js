const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    members: {
        type: [mongoose.Schema.ObjectId],
    },
});

module.exports = mongoose.model("room", RoomSchema);
