import React, { useEffect, useState } from "react";
import Chats from "../Components/Message";
import Contacts from "../Components/Contacts";
import { getContacts } from "../Components/httpRequest";
import { useSocket } from "../Components/SocketContext";
import { useAuth } from "../Components/AuthContext";

const Chat = () => {
    const [width, setWidth] = useState(window.innerWidth); //screen width
    const [user, setUser] = useState(""); // array index to get chats
    const [contacts, setContacts] = useState([]); //all the contacts
    const [loading, setLoading] = useState(true); //loading state
    const { socket } = useSocket();
    const { user: y } = useAuth();

    useEffect(() => {
        if (socket && y) {
            getContacts(setContacts, setLoading, socket, y);
        }
    }, [socket, y]);

    useEffect(() => {
        if (socket) {
            socket.on("getUsers", (data) => {
                setContacts((t) => {
                    return t.map((y) => {
                        return {
                            ...y,
                            online: data.some((x) => x.userId === y.userId),
                        };
                    });
                });
            });
        }
    }, [socket]);

    useEffect(() => {
        window.addEventListener("resize", setWidth(window.innerWidth));
    }, []);
    return (
        <>
            {!loading && (
                <div className="chats-wrapper">
                    {width >= 900 ? (
                        <>
                            <Contacts data={contacts} set={setUser} />
                            {user !== "" && (
                                <Chats
                                    contacts={contacts}
                                    user={user}
                                    set={setUser}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            {user === "" && (
                                <Contacts data={contacts} set={setUser} />
                            )}
                            {user !== "" && (
                                <Chats
                                    contacts={contacts}
                                    user={user}
                                    set={setUser}
                                />
                            )}
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Chat;
