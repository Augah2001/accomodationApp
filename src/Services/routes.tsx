import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import HouseViewPage from "../components/HouseViewPage";
import { getHouses } from "./getHouses";
import getHouseStates from "../States/houseStates";

const Routes = () => {


  return (
    createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: ":id", element: <HouseViewPage /> },
    ],
  },
])
    
  )
}





export default Routes()
