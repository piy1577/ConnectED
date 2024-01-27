const http = require("http");
require("dotenv").config();

const app = require("./src/app");
const connect = require("./src/db");

const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
}).of("/message");

let users = [];
io.on("connection", (socket) => {
    socket.on("addUser", (userId) => {
        const userExist = users.find((user) => user.userId === userId);
        if (!userExist) {
            console.log("User connected", userId);
            const user = { userId, socketId: socket.id };
            users.push(user);
        }
        io.emit("getUsers", users);
    });
    socket.on("disconnect", () => {
        users = users.filter((user) => user.socketId !== socket.id);
        io.emit("getUsers", users);
    });
    socket.on(
        "sendMessage",
        ({ message, senderId, receiverId, conversationId }) => {
            const user = users.find((user) => user.userId === receiverId);
            if (user) {
                io.to(user.socketId).emit("getMessage", {
                    senderId,
                    conversationId,
                    message,
                });
            }
        }
    );
});
const port = process.env.PORT || 8000;
connect(server, port);
