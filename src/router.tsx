import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Landing from "./app/landing/Landing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Landing />
            }
        ]
    }])