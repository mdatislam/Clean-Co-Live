import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Register from './../Components/Register';

export const  pablicRoutes = [
    {path:"/Home", name:"Home", Component:Home},
    {path:"/Login", name:"Login", Component: Login},
    {path:"/Register", name:"Register", Component: Register},
]