import { createBrowserRouter } from "react-router-dom";
import Applied from "../components/Applied/Applied";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import Demography from "../components/Demography/Demography";
import Detail from "../components/Detail/Detail";
import Home from "../components/Home/Home";
import Vacancy from "../components/Home/Vacancy/Vacancy";
import Jobs from "../components/Jobs/Jobs";
import NotFound from "../components/NotFound/NotFound";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs',
                element: <Jobs></Jobs>,
            },
            {
                path: '/job/:id',
                element: <Detail></Detail>,
            },
            {
                path: '/vacancy',
                element: <Vacancy></Vacancy>
            },
            {
                path: '/applied',
                element: <Applied></Applied>,
            },
            {
                path: '/statistics',
                element: <Demography></Demography>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])