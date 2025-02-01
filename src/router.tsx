import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Landing from "./app/landing/Landing";
import Login from "./app/auth/pages/Login";
import Protected from "./app/auth/pages/Protected";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Landing />
            },

            // protected routes
            {
                path: "fixit",
                element: <Protected />,
                children: [
                    {
                        path: "",
                        element: <p>this is the dashboard page</p>
                    }
                ]
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