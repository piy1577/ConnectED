import React from "react";

import { Form } from "../Components";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <Form />
            </div>
            <div className="other2">
                create new account? <Link to="/signup">signup</Link>
            </div>
        </>
    );
};

export default Login;
