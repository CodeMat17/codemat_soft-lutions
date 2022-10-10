import {
  Box,
  Button,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";

function BlogSocialLinks() {
  const router = useRouter();
  const iconBg = useColorModeValue("purple.50", "gray.600");
  const cardBg = useColorModeValue("gray.300", "gray.700");

  return (
    <Box
      bg={cardBg}
      p='4'
      rounded='md'
      shadow='2xl'
      w='270px'
      mx='auto'
      pos='fixed'
      top='40'
      right={["20"]}
      display={{ base: "none", lg: "flex" }}>
      <VStack align='start' justify='center'>
        <Box pos='relative' w='80px' h='80px'>
          <Image
            alt='soft-lutions logo'
            src='/logo.webp'
            layout='fill'
            priority
            objectFit='contain'
          />
        </Box>

        <Text maxW='200px' fontSize='lg'>
          For more, follow us on:
        </Text>
        <HStack spacing='6'>
          <Link href='https://www.facebook.com/profile.php?id=100086487794710'>
            <a>
              <IconButton
                _hover={{ bg: iconBg }}
                icon={<GrFacebookOption size={30} />}
                variant='ghost'
                color='blue.500'
                isRound={true}
              />
            </a>
          </Link>
          <Link href='https://twitter.com/Soft_lutions'>
            <a>
              <IconButton
                _hover={{ bg: iconBg }}
                icon={<BsTwitter size={30} />}
                variant='ghost'
                color='twitter.500'
                isRound={true}
              />
            </a>
          </Link>
          <Link href='https://www.instagram.com/soft_lutions/'>
            <a>
              <IconButton
                _hover={{ bg: iconBg }}
                icon={<FiInstagram color='red' size='30' />}
                variant='ghost'
                isRound={true}
              />
            </a>
          </Link>
        </HStack>
        <Box pt='1'>
          <Button
            onClick={() => router.push("/")}
            colorScheme='purple'
            w='100%'>
            GO TO HOME PAGE
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default BlogSocialLinks;
