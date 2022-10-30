import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../error-page";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Destination from "../../Pages/Destination/Destination";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/users')
            },
            {
                path: 'home', 
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/users')
            },
            {
                path:'news',
                element:<News></News>
            },
            {
                path: 'destination',
                element: <Destination></Destination>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    }
])