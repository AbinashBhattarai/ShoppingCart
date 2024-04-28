import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from "./routes/Root.jsx";
import ErrorPage from "./error-page";
import Home from './routes/Home.jsx'
import Product from './routes/Product.jsx'
import Cart from './routes/Cart.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "products",
        element: <Product />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
