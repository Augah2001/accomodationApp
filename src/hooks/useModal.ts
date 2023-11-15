import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useModal = () => {


    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);

    navigate("/");
  };

  return {isOpen,handleOpen,setIsOpen, handleClose}
}

export default useModal