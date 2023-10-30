import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Home from './components/Home';
import Error from './components/Erros';
import Body from './components/Body';
import Contact from './components/Contact';
import RestrauntMenu from './components/RestrauntMenu';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";






const AppRouter = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
// making header fixed on every component using the children
    children: [
      {
        path : "/",
        element: <Body/>,
      },
      {
        path : "About",
        element: <About/>,
      },

      {
        path: "Home",
        element: <Body/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu/>
      },
    ],
    errorElement: <Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default root
