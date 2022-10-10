import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { BiHomeSmile } from "react-icons/bi";
import { HiOutlineMenuAlt3, HiOutlineNewspaper } from "react-icons/hi";

function BlogMobileMenu() {
  const ref = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("purple.900", "gray.800");
  const router = useRouter();
  const closeDrawerBtn = () => {
    onClose();
  };

  return (
    <Box display={{ md: "none" }}>
      <IconButton
        onClick={onOpen}
        ref={ref}
        icon={<HiOutlineMenuAlt3 size={35} />}
        // isRound
        variant=''
        color='#07f819'
      />

      <Drawer
        size='xs'
        display={{ md: "none" }}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={ref}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack pt='24' w='100%' align='normal'>
              <ButtonGroup as='a' href='/' isAttached w='100%' pb='2'>
                <IconButton icon={<BiHomeSmile size={25} />} />
                <Button onClick={onClose} w='100%'>
                  HOME
                </Button>
              </ButtonGroup>
              <ButtonGroup as='a' href='/blog' isAttached w='100%' pb='2'>
                <IconButton icon={<HiOutlineNewspaper size={25} />} />
                <Button onClick={onClose} w='100%'>
                  BLOG POSTS
                </Button>
              </ButtonGroup>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default BlogMobileMenu;
