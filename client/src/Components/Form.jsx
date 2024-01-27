import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Request } from ".";
import { useAuth } from "./AuthContext";

const Form = () => {
    const [details, setDetails] = useState({ email: "", password: "" });
    const [check, setCheck] = useState({ email: false, password: false });
    const [show, SetShow] = useState(false);
    const { login } = useAuth();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (details.email === "") {
            setCheck({ email: true, password: false });
            return;
        }
        if (details.password < 8) {
            setCheck({ email: false, password: true });
            return;
        }
        Request.Login(details, login);
    };
    const keyHandler = (e) => {
        if (e.key === "Enter") {
            submitHandler();
        }
    };

    return (
        <form onSubmit={submitHandler} onKeyDown={keyHandler}>
            <label htmlFor="">
                Email&nbsp;
                {check.email && (
                    <span style={{ color: "red" }}>Email can't be empty</span>
                )}
            </label>
            <input
                type="email"
                value={details.email}
                onInput={(e) => {
                    setDetails((t) => {
                        return { ...t, email: e.target.value };
                    });
                    setCheck((t) => {
                        return { ...t, email: false };
                    });
                }}
                placeholder="Type your Email"
                autoComplete="auto"
            />
            <label htmlFor="">
                Password&nbsp;
                {check.password && (
                    <span style={{ color: "red" }}>
                        Password should be 8 character long
                    </span>
                )}
            </label>
            <div className="password">
                <input
                    type={show ? "text" : "password"}
                    value={details.password}
                    onInput={(e) =>
                        setDetails((t) => {
                            return { ...t, password: e.target.value };
                        })
                    }
                    placeholder="Type your Password"
                    autoComplete="auto"
                />
                {!show && (
                    <button onClick={() => SetShow((prevState) => !prevState)}>
                        <AiFillEyeInvisible />
                    </button>
                )}
                {show && (
                    <button onClick={() => SetShow((prevState) => !prevState)}>
                        <AiFillEye />
                    </button>
                )}
            </div>
            <input type="submit" />
            <Link to={"/"} style={{ color: "skyblue" }}>
                Forget Password?
            </Link>
        </form>
    );
};

export default Form;
