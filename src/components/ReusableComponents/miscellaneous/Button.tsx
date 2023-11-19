import { Button } from '@chakra-ui/react';
import React from 'react'


interface Props {
    label: string;
    handleClick: () => any 
}

const ButtonRegular = ({label, handleClick}: Props) => {
  return (
    <Button
      bgGradient="linear(to-r, purple.700, #f926ae )"
      onClick={handleClick}
      _hover={{ backgroundColor: "#000021" }}
    >
      {" "}
      {label}
    </Button>
  );
}

export default ButtonRegular