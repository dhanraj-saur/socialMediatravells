import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from './Components/Home'
import Item from './Components/Item'
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/item/:id",
        element:<Item />
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
       <App />
    </RouterProvider>
   
  </Provider>
);
