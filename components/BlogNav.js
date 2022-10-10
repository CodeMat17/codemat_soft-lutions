import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Highlight,
  HStack,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import BlogDesktopMenu from "./BlogDesktopMenu";
import BlogMobileMenu from "./BlogMobileMenu";
import ColorModeBtn from "./ColorModeBtn";

function NavHeader() {
  const router = useRouter();
 const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef();
  
  const bg = useColorModeValue("purple.900", "gray.800");

   const closeDrawerBtn = () => {
     onClose();
   };

  return (
    <Box as='nav' bg={bg} pl='4' pr='2' py='3' position='sticky' top='0' zIndex='60'>
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

        <HStack spacing='4'>
          <ColorModeBtn />
          <BlogMobileMenu />
          <BlogDesktopMenu />
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavHeader;
