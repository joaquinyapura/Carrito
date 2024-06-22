import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Cart } from './components/Cart.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NavigationBar } from './components/NavigationBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationBar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
