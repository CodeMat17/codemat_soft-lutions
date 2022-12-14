import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
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
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import { Link } from "react-scroll";
import { links } from "../databank/navLinks";
import MobileModalForm from "./MobileModalForm";

function MobileMenuButton() {
  const router = useRouter();
  const bg = useColorModeValue("gray.200", "gray.600");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const homeBtn = () => {
    onClose();
  };

  const blogBtn = () => {
    router.push("/blog");
    onClose();
  };

  return (
    <Box display={{ md: "none" }}>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant='ghost'
        _hover={{ bg: "purple.800" }}
        color='#07f819'
        icon={<HiOutlineMenuAlt3 size={35} />}
      />
      <Drawer
        size='xs'
        display={{ md: "none" }}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Heading</DrawerHeader> */}
          <DrawerBody>
            <VStack pt='16' w='100%' align='normal'>
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  spy={link.spy}
                  smooth={link.smooth}
                  offset={link.offset}
                  duration={link.duration}>
                  <HStack
                    align='center'
                    _hover={{ bg }}
                    as='button'
                    mb='2'
                    w='100%'
                    spacing='4'
                    py='2'
                    px='4'
                    rounded='md'
                    onClick={homeBtn}>
                    <Box pos='relative' w='20px' h='20px' >
                      <Image
                        src={link.icon}
                        priority
                        layout='fill'
                        objectFit='contain'
                      />
                    </Box>

                    <Text
                      fontWeight='semibold'
                      fontSize='23'
                      letterSpacing='2px'>
                      {link.item}
                    </Text>
                  </HStack>
                </Link>
              ))}

            <MobileModalForm />
              

              <HStack
                align='center'
                _hover={{ bg }}
                as='button'
                mb='2'
                w='100%'
                spacing='4'
                py='2'
                px='4'
                rounded='md'
                onClick={blogBtn}>
                <Icon as={ImBlog} w={5} h={5} color='black' />
                <Text fontWeight='semibold' fontSize='23' letterSpacing='2px'>
                  BLOG
                </Text>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenuButton;
