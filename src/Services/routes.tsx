import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import HouseViewPage from "../components/HouseViewPage";
import { getHouses } from "./getHouses";
import getHouseStates from "../States/houseStates";
import Auth from "../components/Auth";
import ModalComponent from "../components/SignupModalComponent";


const Routes = () => {


  return (
    createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage />, children: [{path: "auth", element: <ModalComponent/>}]},
      { path: ":id", element: <HouseViewPage /> },
      {path: "auth"}
    ],
  },
])
    
  )
}





export default Routes()
