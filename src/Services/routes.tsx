import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import HouseViewPage from "../components/HouseViewPage";

import ModalComponent from "../components/refactored/SignupModalComponent";
import LoginModalComponent from "../components/refactored/LoginModalComponent";
import ModalTemplate from "../components/ModalTemplate";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

const Routes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
          children: [{
            path: "signup", element: <ModalTemplate headerText={"JOIN"} node = {SignupForm} 
  />
          }, { path: "login", element: <ModalTemplate headerText = {"LOGIN"} node = {LoginForm} /> }],
        },
        { path: ":id", element: <HouseViewPage />, children: [{ path: "view", element: <ModalTemplate headerText="SLIDE" node={ SignupForm} />}] },
      ],
    },
  ]);
};

export default Routes();
