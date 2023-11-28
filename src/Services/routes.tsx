import { createBrowserRouter, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import HouseViewPage from "../components/HouseViewPage";

import ModalTemplate from "../components/ReusableComponents/miscellaneous/ModalTemplate";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import ImageModal from "../components/ImageModal";
import Pay from "../components/pay";
import LandlordPage from "../components/LandlordPage";
import AddForm from "../components/AddForm";
import Signout from "../components/Signout";

const Routes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
          children: [
            {
              path: "signup",
              element: (
                <ModalTemplate
                  headerText={"JOIN"}
                  Node={SignupForm}
                  path="/me"
                />
              ),
            },
            {
              path: "landlord",
              element: <LandlordPage />,
            },
            {
              path: "login",
              element: (
                <ModalTemplate
                  headerText={"LOGIN"}
                  Node={LoginForm}
                  path="/me"
                />
              ),
            },
          ],
        },
        { path: "/signout", element: <Signout /> },
        {
          path: "me",
          element: <HomePage />,
        },
        {
          path: "my-assets",
          element: <LandlordPage />,
          children: [
            {
              path: "add",
              element: (
                <ModalTemplate
                  headerText={"Add house"}
                  Node={AddForm}
                  path="/my-assets"
                />
              ),
            },
          ],
        },

        {
          path: ":id/",
          element: <HouseViewPage />,
          children: [
            {
              path: "view/",
              element: <ImageModal />,
            },
            {
              path: "pay",
              element: <ModalTemplate headerText="Pay" Node={Pay} path="/" />,
            },
          ],
        },
      ],
    },
  ]);
};

export default Routes();
