import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { links } from "../databank/navLinks";

function MobileMenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const HomeBtn = () => {
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
            <VStack pt='24'>
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  spy={link.spy}
                  smooth={link.smooth}
                  offset={link.offset}
                  duration={link.duration}>
                  <Button onClick={HomeBtn} w='100%' variant='ghost' mb='2'>
                    {link.item}
                  </Button>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenuButton;
