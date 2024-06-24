import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStorage from "../hooks/useStorage";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useStorage(false, 'isLoggedIn');

    const login = (payload, redirectTo) => {
        setIsLoggedIn(true);
        navigate(redirectTo || '/blog');
    }

    const logout = () => {
        setIsLoggedIn(false);
        navigate('/login');
    }

    const value = {
        isLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('Non sei dentro al Auth Provider.');
    }
    return context;
}

export { AuthProvider, useAuth };
