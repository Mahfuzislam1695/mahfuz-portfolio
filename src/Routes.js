import { createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Main from "./Layout/Main";
import Home from "./Page/Home";

const router = createBrowserRouter([
    {
        // path: '/',
        element: <Main></Main>, 
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    },
])

export default router;