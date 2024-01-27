import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import {
    MdSpaceDashboard,
    MdOutlineShoppingCart,
    MdChat,
} from "react-icons/md";
import { useAuth } from "./AuthContext";

const SmallNav = ({ route, image }) => {
    return (
        <>
            <div className="Navbar">
                <div className="Nav">
                    <Link
                        to="/"
                        className={route === "/" ? "active" : undefined}
                    >
                        <MdSpaceDashboard />
                        <div>Dashboard</div>
                    </Link>

                    <Link
                        to="/cart"
                        className={route === "/cart" ? "active" : undefined}
                    >
                        <MdOutlineShoppingCart />
                        <div>Cart</div>
                    </Link>
                    <div className="profile">
                        <img src={image} alt="no img" />
                    </div>

                    <Link
                        to="/chats"
                        className={route === "/chats" ? "active" : undefined}
                    >
                        <MdChat />
                        <div>Chats</div>
                    </Link>

                    <Link
                        to="/profile"
                        className={route === "/profile" ? "active" : undefined}
                    >
                        <BiUserCircle />
                        <div>Profile</div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

const BigNav = ({ route, name, image, logout }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <div className="Navbar">
                <div className="profile">
                    <img src={image} alt="no img" />
                    <label>{name}</label>
                </div>
                <hr />
                <div className="Nav">
                    <Link
                        to="/"
                        className={route === "/" ? "active" : undefined}
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/cart"
                        className={route === "/cart" ? "active" : undefined}
                    >
                        Cart
                    </Link>

                    <Link
                        to="/chats"
                        className={route === "/chats" ? "active" : undefined}
                    >
                        Chats
                    </Link>

                    <Link
                        to="/profile"
                        className={route === "/profile" ? "active" : undefined}
                    >
                        Profile
                    </Link>
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
                            onClick={() => navigate("/signup")}
                        >
                            signup
                        </button>
                    </div>
                )}
            </div>
            <Outlet />
        </>
    );
};

const Navbar = () => {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const { user: y, logout } = useAuth();
    const [user, setUser] = useState({
        name: "guest",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU",
    });
    useEffect(() => {
        if (y) {
            setUser(y);
        } else {
            setUser({
                name: "guest",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU",
            });
        }
    }, [y]);
    const { name, image } = user;
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreen({ width: window.innerWidth, height: window.innerHeight });
        });
    }, []);

    const route = useLocation().pathname;
    return screen.width > 900 ? (
        <BigNav route={route} name={name} image={image} logout={logout} />
    ) : (
        <SmallNav route={route} name={name} image={image} />
    );
};

export default Navbar;
