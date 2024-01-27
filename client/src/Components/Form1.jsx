import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const Form1 = ({ click, obj, set }) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [check, setCheck] = useState({ email: false, password: false });

    const checkCorrect = async (e) => {
        e.preventDefault();
        if (obj.email.trim() === "") {
            setCheck((t) => {
                return { ...t, email: true };
            });
            return;
        }

        if (obj.password.length < 8) {
            setCheck((t) => {
                return { ...t, password: true };
            });
            return;
        }

        if (obj.password !== obj.confirm_password) {
            setCheck((t) => {
                return { ...t, password: true };
            });
            return;
        }

        click();
    };
    return (
        <form className="form-1">
            <label htmlFor="">
                Email&nbsp;
                {check.email && (
                    <span style={{ color: "red" }}>Email is invalid</span>
                )}
            </label>
            <input
                type="email"
                value={obj.email}
                onInput={(e) => {
                    set((t) => {
                        return { ...t, email: e.target.value };
                    });
                    setCheck((t) => {
                        return { ...t, email: false };
                    });
                }}
                placeholder="Type your Email"
            />
            <label htmlFor="">
                New Password&nbsp;
                {check.password && (
                    <span style={{ color: "red" }}>
                        (Password is shorter than 8 character or Password
                        doesnot match)
                    </span>
                )}
            </label>
            <div className="password">
                <input
                    type={show ? "text" : "password"}
                    value={obj.password}
                    onInput={(e) => {
                        set((t) => {
                            return { ...t, password: e.target.value };
                        });
                        setCheck((t) => {
                            return { ...t, password: false };
                        });
                    }}
                    placeholder="Type your Password"
                    autoComplete="auto"
                />
                {!show && (
                    <button onClick={() => setShow((prevState) => !prevState)}>
                        <AiFillEyeInvisible />
                    </button>
                )}
                {show && (
                    <button onClick={() => setShow((prevState) => !prevState)}>
                        <AiFillEye />
                    </button>
                )}
            </div>

            <label htmlFor="">Confirm Password</label>
            <div className="password">
                <input
                    type={show2 ? "text" : "password"}
                    value={obj.confirm_password}
                    onInput={(e) => {
                        set((t) => {
                            return { ...t, confirm_password: e.target.value };
                        });
                        setCheck((t) => {
                            return { ...t, password: false };
                        });
                    }}
                    placeholder="Confirm your Password"
                    autoComplete="auto"
                />
                {!show2 && (
                    <button onClick={() => setShow2((prevState) => !prevState)}>
                        <AiFillEyeInvisible />
                    </button>
                )}
                {show2 && (
                    <button onClick={() => setShow2((prevState) => !prevState)}>
                        <AiFillEye />
                    </button>
                )}
            </div>

            <div className="box">
                <button onClick={checkCorrect} className="btn">
                    Next
                </button>
            </div>
        </form>
    );
};

export default Form1;
