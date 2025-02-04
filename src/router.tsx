import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Landing from "./app/landing/Landing";
import Login from "./app/auth/pages/Login";
import Protected from "./app/auth/pages/Protected";
import CreateSpace from "./app/create-space/CreateSpace";
import AllSpaces from "./app/spaces/pages/AllSpaces";
import SpaceOutlet from "./app/spaces/pages/SpaceOutlet";
import SingleSpace from "./app/spaces/pages/SingleSpace";

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
                        path: "create-space",
                        element: <CreateSpace />
                    },
                    {
                        path: "spaces",
                        element: <AllSpaces />
                    },
                    {
                        path: "spaces/:space_id",
                        element: <SpaceOutlet />,
                        children: [
                            {
                                path: "",
                                element: <SingleSpace />
                            }
                        ]
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