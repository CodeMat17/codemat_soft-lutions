import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";

import ModalForm from "./ModalForm";

function HeroSection() {
  const finalRef = useRef(null);
  const bg = useColorModeValue("linear(to-b, purple.900, purple.700)", "");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      id='home'
      w='100%'
      px='4'
      pt='8'
      pb='20'
      bgGradient={bg}
      //   bg='purple.900'
    >
      <Box maxW='6xl' mx='auto'>
        <Flex align='center' flexDir={["column", "column", "row"]}>
          <Box>
            <VStack
              maxW='380px'
              mx={["auto", "auto", 0]}
              spacing='0'
              align={["center", "center", "start"]}>
              <Text
                textAlign='start'
                fontSize='5xl'
                fontWeight='semibold'
                color='purple.400'>
                CodeMat
              </Text>
              <Heading size='3xl' color='white'>
                <Highlight query='ft' styles={{ color: "#07f819" }}>
                  Soft-lutions
                </Highlight>
              </Heading>
            </VStack>
            <Text
              maxW={["6xl"]}
              py='6'
              color='gray.300'
              align={["center", "center", "start"]}
              fontSize='xl'>
              We design and develop sleek, intuitive, dynamic and responsive
              websites and other software solutions. With our products, our
              clients are always happy.
            </Text>
          </Box>

          <Box pos='relative' w={["100%"]} h={["280px", "280px", "320px"]}>
            <Image
              alt='Hero image'
              src='/hero.svg'
              priority
              layout='fill'
              objectFit='fill'
            />
          </Box>
        </Flex>
        <Text
          mt='6'
          maxW='xs'
          mx={["auto", "auto", 0]}
          textAlign={["center", "center", "start"]}
          color='gray.200'>
          Come experience SATISFACTION with our software solutions.
        </Text>
        <Flex mt='6' justify={["center", "center", "start"]}>
          {/* <Link to='contact' spy={true} smooth={true} offset={-80} duration={800}> */}
          <Button ref={finalRef} onClick={onOpen} size='lg' colorScheme='green'>
            CONTACT US NOW
          </Button>
          <ModalForm isOpen={isOpen} onClose={onClose} finalFocusRef={finalRef} />
          {/* </Link> */}
        </Flex>
      </Box>
    </Box>
  );
}

export default HeroSection;
