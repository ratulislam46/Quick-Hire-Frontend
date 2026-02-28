import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import NotFound from "../Components/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: 'login',
        Component: Login
    },
    {
        path: 'register',
        Component: Register
    },
    {
        path: '/*',
        Component: NotFound
    }
]);