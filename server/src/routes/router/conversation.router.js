const { Router } = require("express");
const validateToken = require("../../middleware/validateToken");

const {
    createRoom,
    getMessage,
    sendMessage,
    getContacts,
} = require("../controller/conversation.controller");

const conversatinRouter = Router();

conversatinRouter
    .route("/")
    .get(validateToken, getContacts)
    .post(validateToken, createRoom);

conversatinRouter.route("/message").post(validateToken, sendMessage);
conversatinRouter.get("/:conversationId", validateToken, getMessage);

// const sockets = (socket) => {
//     console.log(`new user connected ${socket.id}`);
// };

module.exports = { conversatinRouter };
