import {
  Box,
  Button,
  Flex,
  Highlight,
  HStack,
  Text,
  useColorModeValue,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { links } from "../databank/navLinks";
import ColorModeBtn from "./ColorModeBtn";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenuButton from "./MobileMenuButton";
import { useRouter } from 'next/router'
import {useRef} from 'react'
import ModalForm from "./ModalForm";

function NavHeader() {
  const ref = useRef(null)
  const {isOpen, onOpen, onClose} = useDisclosure()
  const router = useRouter()
  const bg = useColorModeValue("purple.900", "gray.800");

  return (
    <Box
      as='nav'
      bg={bg}
      pl='4'
      pr='2'
      py='3'
      position='sticky'
      top='0'
      zIndex='60'>
      <Flex maxW='6xl' mx='auto' align='center' justify='space-between'>
        <HStack>
          <Box
            as='a'
            href='/'
            position='relative'
            w='50px'
            h='50px'
            rounded='full'
            overflow='hidden'>
            <Image
              alt='logo'
              src='/logo.webp'
              priority
              objectFit='cover'
              layout='fill'
            />
          </Box>
          <VStack as='a' href='/' spacing='-1' align='start'>
            <Text
              color='purple.300'
              fontWeight='semibold'
              fontSize={["lg", "lg", "xl"]}>
              CodeMat
            </Text>
            <Text
              color='white'
              fontWeight='semibold'
              fontSize={["xl", "xl", "2xl"]}>
              <Highlight query='ft' styles={{ color: "#07f819" }}>
                Soft-lutions
              </Highlight>
            </Text>
          </VStack>
        </HStack>

        <ColorModeBtn />
        <MobileMenuButton />
        <HStack spacing='' display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <DesktopNavLinks key={link.id} {...link} />
          ))}

          
          <Box>
            <Button ref={ref}
            onClick={onOpen}
            py='4'
            size={["xs", "xs", "xs", "md"]}
            variant='ghost'
            color='white'
            _hover={{ bg: "purple.800", color: "#07f819" }}
            letterSpacing='1px'
            fontSize='14'>
            CONTACT US
            </Button>
            <ModalForm isOpen={isOpen} onClose={onClose} finalFocusRef={ref} />
          </Box>
          

          <Button
            onClick={() => router.push("/blog")}
            py='4'
            size={["xs", "xs", "xs", "md"]}
            variant='ghost'
            color='white'
            _hover={{ bg: "purple.800", color: "#07f819" }}
            letterSpacing='1px'
            fontSize='14'>
            BLOG
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavHeader;
