import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form1 from "../Components/Form1";
import Form2 from "../Components/Form2";

const Signup = () => {
    const [details, setDetails] = useState({
        email: "",
        password: "",
        confirm_password: "",
        name: "",
        phoneNumber: 1000000000,
        address: "",
    });
    const [number, setNumber] = useState(false);
    const nextPage = () => {
        setNumber((prevState) => !prevState);
    };
    return (
        <>
            <div className="signup">
                <h1>SignUp</h1>
                <div className="slides">
                    <div className={`circle active`}>1</div>
                    <div
                        className="line"
                        style={
                            !number
                                ? { border: "0.3rem solid #ffffff" }
                                : { border: "0.3rem solid skyblue" }
                        }
                    />
                    <div className={`circle ${number && "active"}`}>2 </div>
                </div>
                {number ? (
                    <Form2 click={nextPage} obj={details} set={setDetails} />
                ) : (
                    <Form1 click={nextPage} obj={details} set={setDetails} />
                )}
            </div>
            {!number && (
                <div className="other2">
                    Already a user? <Link to="/login"> login</Link>
                </div>
            )}
        </>
    );
};

export default Signup;
