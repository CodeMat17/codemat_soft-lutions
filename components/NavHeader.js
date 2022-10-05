import {
  Box,
  Flex,
  Highlight,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { links } from "../databank/navLinks";
import ColorModeBtn from "./ColorModeBtn";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenuButton from "./MobileMenuButton";

function NavHeader() {
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
            position='relative'
            w='50px'
            h='50px'
            rounded='full'
            overflow='hidden'>
            <Image
              alt='logo'
              src='/logo.png'
              priority
              objectFit='cover'
              layout='fill'
            />
          </Box>
          <VStack spacing='-1' align='start'>
            <Text
              color='purple.300'
              fontWeight='semibold'
              fontSize={["lg", "lg", "xl"]}>
              CodMat
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
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavHeader;
