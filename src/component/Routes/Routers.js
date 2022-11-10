import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MenuDetails from "../pages/menuDetails/MenuDetails";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import Update from "../pages/Update/Update";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Services></Services>
            },
            {
                path: '/menuDetails/:id',
                element:<MenuDetails></MenuDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/addservice',
                element:<PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader: ({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
]);

export default router;