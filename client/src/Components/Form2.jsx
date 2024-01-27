import React from "react";
import { Request } from ".";
import { useAuth } from "./AuthContext";

const Form2 = ({ click, obj, set }) => {
    const { login } = useAuth();

    const submitHandler = async (e) => {
        e.preventDefault();
        Request.Register(obj, login);
    };

    return (
        <form onSubmit={submitHandler} className="form-2">
            <label htmlFor="">Name</label>
            <input
                type="text"
                value={obj.name}
                onInput={(e) =>
                    set((t) => {
                        return { ...t, name: e.target.value };
                    })
                }
                placeholder="Type your Name"
            />
            <label htmlFor="">Phone Number.</label>
            <input
                type="number"
                value={obj.phone_number}
                onInput={(e) =>
                    set((t) => {
                        return { ...t, phone_number: e.target.value };
                    })
                }
                placeholder="Type your Room no."
            />
            <label htmlFor="">Address</label>
            <input
                type="text"
                value={obj.address}
                onInput={(e) =>
                    set((t) => {
                        return { ...t, address: e.target.value };
                    })
                }
                placeholder="Type your Hostel name"
            />
            <div className="box">
                <input type="submit" className="btn" />
                <button className="back" onClick={click}>
                    Back
                </button>
            </div>
        </form>
    );
};

export default Form2;
