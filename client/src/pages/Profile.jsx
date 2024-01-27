import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import useDriverPicker from "react-google-drive-picker";
import { updateImage } from "../Components/httpRequest";

const Profile = () => {
    const { user: data, updatePfp } = useAuth();
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        image: "",
        email: "",
        name: "",
        address: "",
    });
    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        rePassword: "",
    });
    useEffect(() => {
        if (data) {
            setInfo({
                image: data.image,
                email: data.email,
                name: data.name,
                address: data.address,
            });
        }
    }, [data]);

    const submitHandler = () => {
        navigate("/sell");
    };
    const google_client_id =
        "809388333953-mp4ic4ssmigroi4aa1oi98opm2u0cgjt.apps.googleusercontent.com";

    const google_api_key = "AIzaSyAFsd97DLr6omGwTH8Abii7vZG64URbNj4";
    const [createPicker] = useDriverPicker();
    const config = {
        clientId: google_client_id,
        developerKey: google_api_key,
        viewId: "DOCS",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
    };

    return (
        <div className="profileWrapper">
            <form className="profile">
                <div>
                    <h1>Profile</h1>
                    <img
                        src={info.image}
                        alt="profile"
                        onClick={(e) => {
                            e.preventDefault();
                            createPicker({
                                ...config,
                                callbackFunction: async (data) => {
                                    if (data.action === "picked") {
                                        const file = `https://drive.google.com/thumbnail?id=${
                                            data.docs[0].embedUrl.split("/")[5]
                                        }`;
                                        console.log(file);
                                        updateImage(file);
                                        updatePfp(file);
                                    }
                                },
                            });
                        }}
                    />
                    <div className="inputWrapper">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            value={info.name}
                            onChange={(e) => {
                                setInfo({
                                    ...info,
                                    name: e.target.value,
                                });
                            }}
                        />

                        <label htmlFor="Address">Address</label>
                        <input
                            type="text"
                            value={info.address}
                            onChange={(e) => {
                                setInfo({
                                    ...info,
                                    address: e.target.value,
                                });
                            }}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={info.email}
                            onChange={(e) => {
                                setInfo({
                                    ...info,
                                    email: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
            </form>
            <form className="login_info">
                <div>
                    <h1>Personal Information</h1>
                    <div className="inputWrapper">
                        <label htmlFor="current-Password">
                            Current Password
                        </label>
                        <div className="password">
                            <input
                                type="password"
                                value={password.currentPassword}
                                onChange={(e) => {
                                    setPassword({
                                        ...password,
                                        currentPassword: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <label htmlFor="new-Password">New Password</label>
                        <div className="password">
                            <input
                                type="password"
                                value={password.newPassword}
                                onChange={(e) => {
                                    setPassword({
                                        ...password,
                                        newPassword: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <label htmlFor="re-Password">Retype Password</label>
                        <div className="password">
                            <input
                                type="password"
                                value={password.rePassword}
                                onChange={(e) => {
                                    setPassword({
                                        ...password,
                                        rePassword: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div className="sell">
                <button onClick={submitHandler}>Want to sell item ?</button>
            </div>
        </div>
    );
};

export default Profile;
