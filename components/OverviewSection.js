import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

function OverviewSection() {
  const bg = useColorModeValue("purple.50", "");
  const color = useColorModeValue("purple.900", "");

  return (
    <Box id='overview' py='12' bg={bg}>
      <Box maxW='6xl' mx='auto'>
        <Heading textAlign='center' size='xl' color={color}>
          OVERVIEW
        </Heading>
        <Flex
          mt='12'
          align='center'
          justify='center'
          flexDir={["column", "column", "row"]}>
          <Box
            pos='relative'
            w={["100%", "80%"]}
            h={["300px", "320px", "350px"]}>
            <Image
              alt='overview'
              src='/overview.svg'
              priority
              layout='fill'
              objectFit='contain'
            />
          </Box>
          <Box p='4' mr={[0, 0, 8, 32]}>
            <Text
              fontSize='lg'
              textAlign={["center", "center", "left"]}
              maxW={["xl", "sm", "lg", "xl"]}
              mx='auto'>
              It is on you to accept the fact that marketing has gone digital,
              where you reach millions of your targeted clients world wide
              within minutes. Our business at CODEMAT SOFT-LUTIONS is to help you
              create solutions that will bring your businesses to life
              satisfactorily. We pay 100% attention to SEO to ensure that your
              goods or services are visible to potential clients, investors,
              etc. We guarantee you of increased website traffic with our proven
              strategies and heart-to-heart customer-client conversations.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default OverviewSection;
