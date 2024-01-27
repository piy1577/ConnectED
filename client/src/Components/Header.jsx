import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <div className="headerWrapper">
                <div className="header">
                    <h1>ConnectED</h1>
                </div>
                {user ? (
                    <div className="button">
                        <button className="Sign_out" onClick={logout}>
                            SignOut
                        </button>
                    </div>
                ) : (
                    <div className="button">
                        <button
                            className="Sign_out"
                            onClick={() => navigate("/login")}
                        >
                            login
                        </button>
                        <button
                            className="Sign_out"
                            onClick={() => {
                                navigate("/signup");
                            }}
                        >
                            Signup
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
