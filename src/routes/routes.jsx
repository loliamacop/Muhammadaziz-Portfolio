import { createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <Home/>
    },
    {
        path: Paths.about,
        element: <About/>
    },
])