const asynchandler = require("express-async-handler");
const RoomModel = require("../../model/Room.model");
const MessageModel = require("../../model/Message.model");
const userModel = require("../../model/user.model");

const createRoom = asynchandler(async (req, res) => {
    const { id: sender } = req.body;
    const { id } = req.body.user;

    let room = await RoomModel.findOne({ members: { $all: [id, sender] } });
    if (room) {
        res.json(room.id);
    } else {
        room = await RoomModel.create({ members: [id, sender] });
        res.json(room.id);
    }
});

const getContacts = asynchandler(async (req, res) => {
    const { id } = req.body.user;

    const conversations = await RoomModel.find({ members: { $in: [id] } });
    if (!conversations) {
        res.status(400);
        throw new Error("Cannot get Contacts!");
    }
    let contacts = [];
    for (let x of conversations) {
        if (x.members[0].toString() === id) {
            const user = await userModel.findById(x.members[1], {
                name: 1,
                image: 1,
            });
            contacts.push({
                name: user.name,
                image: user.image,
                id: x.id,
                userId: user._id,
            });
        } else {
            const user = await userModel.findById(x.members[0], {
                name: 1,
                image: 1,
            });
            contacts.push({
                name: user.name,
                image: user.image,
                id: x.id,
                userId: user._id,
            });
        }
    }
    res.json(contacts);
});

const sendMessage = asynchandler(async (req, res) => {
    const { conversationId, message } = req.body;
    const { id } = req.body.user;

    const result = await MessageModel.create({
        conversationId,
        senderId: id,
        message,
    });

    if (!result) {
        res.status(400);
        throw new Error("Cannot send message");
    }
    res.json("Message sent successfully!");
});

const getMessage = asynchandler(async (req, res) => {
    const { conversationId } = req.params;
    const message = await MessageModel.find(
        { conversationId },
        { _id: 0, senderId: 1, message: 1 }
    );
    if (!message) {
        res.status(400);
        throw new Error("Cannot get Message");
    }
    res.json(message);
});

module.exports = { createRoom, getContacts, sendMessage, getMessage };
