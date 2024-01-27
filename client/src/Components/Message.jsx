import React, { useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import Profile from "./Profile";
import { getMessage, sendMessage } from "./httpRequest";
import { useAuth } from "./AuthContext";
import { useSocket } from "./SocketContext";

const Message = ({ contacts, user, set }) => {
    const [chat, setChat] = useState("");
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user: y } = useAuth();
    const { socket } = useSocket();
    useEffect(() => {
        getMessage(contacts[user].id, setChats, setLoading);
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on("getMessage", (data) => {
                console.log(data);
                setChats((prev) => [...prev, data]);
            });
        }
    }, [socket]);

    return (
        <>
            {!loading && (
                <div className="chats">
                    <Profile set={set} user={contacts[user]} />
                    <div className="chat-wrapper">
                        {chats.map((item, i) => (
                            <div
                                key={i}
                                className={`chat ${
                                    item.senderId === y.id ? "you" : "user"
                                }`}
                            >
                                {item.message}
                            </div>
                        ))}
                    </div>
                    <form
                        className="text-input"
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendMessage(
                                chat,
                                contacts[user].id,
                                y.id,
                                contacts[user].userId,
                                setChats,
                                socket
                            );
                            setChat("");
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Type your message"
                            value={chat}
                            onInput={(e) => setChat(e.target.value)}
                        />

                        <BiSend
                            onClick={(e) => {
                                e.preventDefault();
                                sendMessage(
                                    chat,
                                    contacts[user].id,
                                    y.id,
                                    contacts[user].userId,
                                    setChats,
                                    socket
                                );
                                setChat("");
                            }}
                        />
                    </form>
                </div>
            )}
        </>
    );
};

export default Message;
