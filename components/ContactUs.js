import {
  Box,
  Button,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactUs() {
  const bg = useColorModeValue("purple.100", "");
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
            title: "DONE!",
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
  };

  return (
    <Box id='contact' px='4' py='12' bg={bg}>
      <Heading textAlign='center' size='xl' color={color}>
        CONTACT US
      </Heading>
      <Text fontSize='sm' textAlign='center' maxW='md' mx='auto'>
        Send a message to us let&apos;s help grow and breath your dream business
        to life.
      </Text>
      <Container px='0' py='4' centerContent>
        <chakra.form
          ref={formRef}
          onSubmit={sendEmail}
          color={formColor}
          bg={formBg}
          px='8'
          py='6'
          mt='4'
          rounded='md'
          w='100%'
          maxW='md'
          shadow='2xl'>
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
          <Button
            type='submit'
            isLoading={isLoading}
            loadingText='Sending...'
            w='100%'
            colorScheme='purple'>
            SEND
          </Button>
        </chakra.form>
      </Container>
    </Box>
  );
}

export default ContactUs;
