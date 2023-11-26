import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useColorModeValue,
  ModalCloseButton,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useOutletContext } from "react-router-dom";

import SlideShow from "./SlideShow";
import { ContextText } from "../hooks/useGetPageData";

const ImageModal = () => {
  const { id, isOpen, handleClose, houses } = useOutletContext<ContextText>();
  const house = houses?.find((house) =>
    id ? house.houseNumber === parseInt(id) : null
  );
  console.log("clicked");

  return (
    <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={()=>handleClose}>
      <ModalOverlay />
      <ModalContent width={"100%"}>
        <ModalBody
          borderBottomRadius={8}
          bg={useColorModeValue("white", "gray.700")}
          width={"100%"}
        >
          <SlideShow house={house} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
