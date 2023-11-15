import {
  Show,
  GridItem,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import HomeViewCard from "./HomeViewCard";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { ContextText } from "./Layout";

const HouseViewPage = () => {
  const { houses, isOpen, handleClose } = useOutletContext<ContextText>();

  const { id } = useParams<{ id: string | undefined }>();

  return (
    <>
      <Show above="lg">
        <GridItem paddingTop={5} area="leftSide"></GridItem>
      </Show>
      <Show above="lg">
        <GridItem paddingTop={5} area="rightSide"></GridItem>
      </Show>

      <GridItem paddingTop={5} paddingRight={5} paddingLeft={5} area="main">
        <Outlet context={{ isOpen, handleClose }} />
        <HomeViewCard houses={houses} id={id} />
      </GridItem>
    </>
  );
};

export default HouseViewPage;
