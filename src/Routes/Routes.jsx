import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Trems/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },

    {
        path: "/category",
        element: <Main></Main>,
        children: [
            // {
            //     path: "/",
            //     element: <Category></Category>,
            //     loader: () => fetch('http://localhost:5000/news')
            // },
            {
                path: ":id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;