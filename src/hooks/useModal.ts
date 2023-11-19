import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useModal = () => {
  const [path, setPath] = useState<string | "">("");

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);

    navigate(path, {replace: true});
  };

  return { path, isOpen, handleOpen, setIsOpen, handleClose, setPath };
};

export default useModal;
