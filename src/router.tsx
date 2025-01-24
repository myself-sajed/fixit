import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Landing from "./app/landing/Landing";
import Login from "./app/auth/pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Landing />
            },

            // auth routes
            {
                path: "auth",
                children: [
                    {
                        path: "login",
                        element: <Login />
                    },
                ]
            }
        ]
    }])