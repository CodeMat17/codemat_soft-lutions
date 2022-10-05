import { Box, Container, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

function FeaturesCard({ alt, svg, title, content }) {
   const bg = useColorModeValue("white", "gray.700");
   const color = useColorModeValue("purple.900", "gray.300");
  
  return (
    <Box
      // border='1px'
      borderColor='purple.200'
      bg={bg}
      shadow='lg'
      rounded='md'
      mt='8'
      w={['280px']}
      mx='auto'
      px='4'
      pb='6'>
      <Box
        pos='relative'
        shadow='2xl'
        rounded='full'
        boxSize='130'
        mx='auto'
        my='6'
        justifySelf='center'>
        <Image alt={alt} src={svg} layout='fill' objectFit='contain' priority />
      </Box>
      <Heading size='md' textAlign='center' color={color}>
        {title}
      </Heading>
      <Container
        bg='purple.700'
        mt='1'
        w='100px'
        h='1'
        rounded='full'></Container>
      <Text fontSize='sm' textAlign='center' mt='4' color={color}>
        {content}
      </Text>
    </Box>
  );
}

export default FeaturesCard;
