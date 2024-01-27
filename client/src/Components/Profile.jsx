import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Profile = ({ user, set }) => {
    return (
        <div className="chat-profile">
            <button className="back" onClick={() => set("")}>
                <BiArrowBack />
            </button>
            <img src={user.image} alt={user.name} />
            <h1>{user.name}</h1>
            {user.online && <h4>online</h4>}
        </div>
    );
};

export default Profile;
