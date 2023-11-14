import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { useOutletContext } from 'react-router-dom';
import { ContextText } from './Layout';
import SignupCard from './SignupCard';
import GradientDiv from './GradientDiv';

const ModalComponent = () => {



    const { isOpen, handleClose } = useOutletContext<ContextText>()
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize="3xl"
          color="rgb(249 38 174)"
          textAlign="center"
          bg="blue.900"
          borderTopRadius={8}
        >
          JOIN
              </ModalHeader>
              <GradientDiv width='0%' />
        <ModalCloseButton size='lg' color="pink.500"/>
        <ModalBody borderBottomRadius={8} bg="blue.900">
          <SignupCard />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent