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


useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurantList =
      data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurantList, data);
    setValue((preValue) => ({
      ...preValue,
      data: restaurantList,
      savedData: restaurantList,
      loading: false,
    }));
  };