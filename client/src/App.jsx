import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Cart,
    Dashboard,
    Login,
    Product,
    Search,
    Signup,
    Profile,
    Chat,
} from "./pages";
import { Header, Navbar, SocketProvider } from "./Components";
import * as Auth from "./Components/AuthContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Navbar />
            </>
        ),
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/:id",
                element: <Product />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/chats",
                element: <Chat />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);

const App = () => {
    return (
        <Auth.AuthProvider>
            <SocketProvider>
                <RouterProvider router={router} />
            </SocketProvider>
        </Auth.AuthProvider>
    );
};

export default App;
