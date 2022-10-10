import {
  Box,
  Button,
  Flex,
  Highlight,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";
import ColorModeBtn from "./ColorModeBtn";

function NavHeader() {
  const router = useRouter();
  const bg = useColorModeValue("purple.900", "gray.800");

  return (
    <Box as='nav' bg={bg} px='4' py='3' position='sticky' top='0' zIndex='60'>
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
          <Box display={{ sm: "none" }}>
            <IconButton
              onClick={() => router.back()}
              icon={<FaChevronLeft />}
              isRound
              variant='outline'
              color='gray.400'
            />
          </Box>
          <Box display={{ base: "none", sm: "flex" }}>
            <Button
              onClick={() => router.back()}
              leftIcon={<FaChevronLeft />}
              color='gray.400'
              bg={bg}
              variant='outline'
              rounded='full'>
              Back
            </Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavHeader;
