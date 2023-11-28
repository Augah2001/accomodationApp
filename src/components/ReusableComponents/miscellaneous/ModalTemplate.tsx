import { useOutletContext } from "react-router-dom";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import GradientDiv from "./GradientDiv";
import { ContextText } from "../../../hooks/useGetPageData";

interface Props {
  headerText: string;
  Node: () => JSX.Element;
  path: string
}

const ModalTemplate = ({ headerText, Node, path }: Props) => {
  const { isOpen, handleClose } = useOutletContext<ContextText>();
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={()=> handleClose(path)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize="3xl"
          color="rgb(249 38 174)"
          textAlign="center"
          bg={useColorModeValue("white", "gray.700")}
          borderTopRadius={8}
        >
          {headerText}
        </ModalHeader>
        <GradientDiv width="0%" />
        <ModalCloseButton size="lg" color="pink.500" />
        <ModalBody
          borderBottomRadius={8}
          bg={useColorModeValue("white", "gray.700")}
        >
          <Node />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalTemplate;
