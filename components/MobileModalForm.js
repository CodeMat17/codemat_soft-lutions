import { Box, HStack, Icon, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { RiMailSendLine } from "react-icons/ri";
import ModalForm from "./ModalForm";

function MobileModalForm() {
  const modalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("gray.200", "gray.600");

  return (
    <Box>
      <HStack
        align='center'
        _hover={{ bg }}
        as='button'
        ref={modalRef}
        mb='2'
        w='100%'
        spacing='4'
        py='2'
        px='4'
        rounded='md'
        onClick={onOpen}>
        <Icon as={RiMailSendLine} w={5} h={5} color='black' />
        <Text fontWeight='semibold' fontSize='23' letterSpacing='2px'>
          CONTACT US
        </Text>
      </HStack>
      <ModalForm isOpen={isOpen} onClose={onClose} finalFocusRef={modalRef} />
    </Box>
  );
}

export default MobileModalForm;
