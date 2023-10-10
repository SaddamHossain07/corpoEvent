import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import PrivetRouts from "./PrivetRouts";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')

            },
            {
                path: '/about',
                element: <PrivetRouts><About></About></PrivetRouts>
            },
            {
                path: '/service-detail/:id',
                element: <PrivetRouts><ServiceDetail></ServiceDetail></PrivetRouts>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default Routes;