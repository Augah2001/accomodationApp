import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Signout = () => {
    const toast = useToast()
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/")
    window.location.reload()
    toast({title: " logged out succeessfully", position: 'top'})

  }, []);

  return null;
};

export default Signout;
