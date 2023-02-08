import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Loging from "./views/Loging";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";

const router = createBrowserRouter(
    [
       
     
       {
            path: '/',
            element:<DefaultLayout/>,
            children: [
                {
                    path:'/dashboard',
                    element:<Navigate to="/" />
                },
                
                {
                    path: '/',
                    element:<Dashboard/>
        
                },
                        
                {
                    path: '/surveys',
                    element:<Surveys/>
        
                },
            ]

        },

        {
            path: '/',
            element:<GuestLayout/>,
            children: [
                
                {
                    path: '/login',
                    element:<Loging/>

                },

                {
                    path: '/signup',
                    element:<Signup/>

                },
            ]

        },

        
    ]
    )

export default router;