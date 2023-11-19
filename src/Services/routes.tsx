import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import HouseViewPage from "../components/HouseViewPage";

import ModalTemplate from "../components/ReusableComponents/miscellaneous/ModalTemplate";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import useExample from "../components/useExample";
import SlideShow from "../components/SlideShow";
import ImageModal from "../components/ImageModal";
import Pay from "../components/pay";

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
              element: <ModalTemplate headerText={"JOIN"} Node={SignupForm} />,
            },
            {
              path: "login",
              element: <ModalTemplate headerText={"LOGIN"} Node={LoginForm} />,
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
              element: <ModalTemplate headerText="Pay" Node={Pay} />,
            },
          ],
        },
      ],
    },
  ]);
};

export default Routes();
