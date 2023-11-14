import { Show, GridItem, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import HomeViewCard from "./HomeViewCard";
import { house } from "../Services/getHouses";
import { useOutletContext, useParams } from "react-router-dom";
import { ContextText } from "./Layout";

interface Props {
  isOpen: boolean;
  handleClose: () => void
}
 


const HouseViewPage = () => {

  


  const { houses, setHouses, isOpen, handleClose } = useOutletContext<ContextText>()

  const {id} = useParams<{id: string | undefined}>();
  

  return (
    <>
      <Show above="lg">
        <GridItem paddingTop={5} area="leftSide"></GridItem>
      </Show>
      <Show above="lg">
        <GridItem paddingTop={5} area="rightSide"></GridItem>
      </Show>

      <GridItem paddingTop={5} paddingRight={5} paddingLeft={5} area="main">
        <HomeViewCard houses={houses} id={id} />
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Signup Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Add your signup form components here */}
              <form>
                <label>
                  Name:
                  <input type="text" />
                </label>
                <br />
                <label>
                  Email:
                  <input type="email" />
                </label>
                <br />
                <label>
                  Password:
                  <input type="password" />
                </label>
                <br />
                <Button type="submit">Submit</Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </GridItem>
    </>
  );
};

export default HouseViewPage;
