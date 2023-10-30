# ROUTING 
# EPISODE 07 - FInding the path

# step- 1 
 npm i react-router-dom
# step-2
    if using create react app
    import these😎
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

<!-- now create a router function  -->

# 3
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
    ],
    errorElement: <Error/>,
  },
  
])


Render this in Root

<RouterProvider router={AppRouter} />

# step- 4 

now import the index js file to app js 

 # note - if router is not showing remove the app function from the root function in index.js

 # note - import all the js function use wil use in route

 # note - we import index.js to app.js to use the outlet function .


 # THEORY 


- client side ROuting
- server side Routing 

# Now Creating Info for cards on click.


