import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import About from './Components/About';
import Shop from './Components/Shop';
import CartItem from './Components/Cards/CartItem';
import StoredCart from './Components/StoredCart';
import { productsAndCartData } from './Loaders/Loaders';
import { Toaster } from 'react-hot-toast';
import Login from './Login&Register.jsx/Login';
import Register from './Login&Register.jsx/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateProvider from './Provider/PrivateProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: productsAndCartData,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element:<PrivateProvider> <Shop></Shop></PrivateProvider>,
        loader: () => fetch('products.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/cart',
        element: <StoredCart></StoredCart>,
        loader: productsAndCartData,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
