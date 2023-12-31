// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import root from "./index";
import { Outlet } from "react-router-dom";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet/>
      {/* <Footer /> */}
      
    </React.Fragment>
  );
};

// const Router = () => {
  
//   < RouterProvider router={Approuter} />
// }



export default App;
