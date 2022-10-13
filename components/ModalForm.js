import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ModalForm({ isOpen, onClose, finalFocusRef }) {
  const bg = useColorModeValue("purple.50", "");
  const formBg = useColorModeValue("purple.900", "gray.700");
  const color = useColorModeValue("purple.900", "");
  const formColor = useColorModeValue("purple.300", "gray.300");
  const formRef = useRef();
  const [isLoading, setIsLoadong] = useState(false);
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoadong(true);
    emailjs
      .sendForm(
        "service_iqzbe0u",
        "template_zu7v67u",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        (result) => {
          toast({
            title: "DONE!",
            description: "Email Sent",
            status: "success",
            duration: 9000,
            position: "top",
            isClosable: true,
          });
        },
        (error) => {
          toast({
            title: "Error!",
            description: error.text,
            status: "error",
            duration: 9000,
            position: "top",
            isClosable: true,
          });
        }
      );
    setIsLoadong(false);
    e.target.reset();
    onClose();
  };

  return (
    <Modal
      size={["sm", "md"]}
      isCentered
      motionPreset='slideInBottom'
      scrollBehavior='inside'
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={finalFocusRef}>
      <ModalOverlay />
      <ModalContent mx='2'>
        <ModalHeader mt='6' maxW={["300px", "400px", "500px"]}>
          WE ARE EXPECTING YOUR MAIL
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <chakra.form
            ref={formRef}
            onSubmit={sendEmail}
            // color={formColor}
            // bg={formBg}
            pb='4'>
            <FormControl isRequired={true} mb='4'>
              <FormLabel>Full Name</FormLabel>
              <Input
                name='user_name'
                w='100%'
                placeholder='Enter your first name here'
              />
            </FormControl>
            <FormControl isRequired={true} mb='4'>
              <FormLabel>Phone No.</FormLabel>
              <Input
                name='user_phone'
                type='tel'
                w='100%'
                placeholder='Enter your phone no. here'
              />
            </FormControl>
            <FormControl isRequired={true} mb='4'>
              <FormLabel>Email</FormLabel>
              <Input
                name='user_email'
                w='100%'
                placeholder='Enter your email here'
              />
            </FormControl>
            <FormControl isRequired={true} mb='4'>
              <FormLabel>Subject</FormLabel>
              <Input
                name='subject'
                w='100%'
                placeholder='Enter your subject here'
              />
            </FormControl>
            <FormControl isRequired={true} mb='4'>
              <FormLabel>Message</FormLabel>
              <Textarea
                name='message'
                w='100%'
                placeholder='Enter your message here'
              />
            </FormControl>
            {/* <Button
              type='submit'
              isLoading={isLoading}
              loadingText='Sending...'
              w='100%'
              colorScheme='purple'>
              {isLoading ? "SENDING..." : "SEND"}
            </Button> */}

            <HStack mt='6'>
              <Button onClick={onClose} colorScheme='blue'>
                Close
              </Button>
              <Spacer />
              <Button type='submit' isLoading={isLoading} variant='outline'>
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </HStack>
          </chakra.form>
        </ModalBody>
        {/* 
        <ModalFooter>
          <Button colorScheme='blue' mr='3' onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}

export default ModalForm;
