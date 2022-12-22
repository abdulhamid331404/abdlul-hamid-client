import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Details from "../../Pages/Details/Details";
import AboutMe from "../../Pages/Home/AboutMe/AboutMe";
import Blog from "../../Pages/Home/Blog/Blog";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/details',
                element: <Details></Details>
            }
        ]
    }
]);

export default router;