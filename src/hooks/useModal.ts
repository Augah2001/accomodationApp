import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {pathname} = useLocation()

  useEffect(()=> {
    pathname === "/login" || pathname === "/signup" && setIsOpen(true)
  },[pathname])
  const [path, setPath] = useState<string | "">("");

  

  const handleOpen = () => {
    setIsOpen(true);
  };

  const navigate = useNavigate();

  const handleClose = (path: string) => {
    setIsOpen(false);

    navigate(path, { replace: true });
  };

  return { path, isOpen, handleOpen, setIsOpen, handleClose, setPath };
};

export default useModal;
