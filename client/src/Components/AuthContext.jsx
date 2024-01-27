// AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { Request } from ".";
import Cookies from "js-cookie";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = Cookies.get("token");
        Request.checkAuth(setUser, token);
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
    };

    const updatePfp = (image) => {
        setUser({ ...user, image });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updatePfp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
