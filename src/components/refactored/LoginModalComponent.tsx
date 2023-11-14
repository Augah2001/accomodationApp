import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import GradientDiv from "../GradientDiv";
import SignupCard from "./SignupCard";
import { useOutletContext } from "react-router-dom";
import { ContextText } from "../Layout";
import LoginCard from "./LoginCard";
import LoginForm from "../LoginForm";

const LoginModalComponent = () => {
  const { isOpen, handleClose } = useOutletContext<ContextText>();
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize="3xl"
          color="rgb(249 38 174)"
          textAlign="center"
          bg={useColorModeValue("white", "gray.700")}
          borderTopRadius={8}
        >
          LOGIN
        </ModalHeader>
        <GradientDiv width="0%" />
        <ModalCloseButton size="lg" color="pink.500" />
        <ModalBody
          borderBottomRadius={8}
          bg={useColorModeValue("white", "gray.700")}
        >
          <LoginForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModalComponent;
