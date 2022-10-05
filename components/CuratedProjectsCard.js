import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

function CuratedProjectsCard({ title, alt, image, desc }) {
   const bg = useColorModeValue("gray.100", "gray.700");
   const color = useColorModeValue("purple.900", "");
  
  return (
    <Box
      bg={bg}
      w={["250px", "300px", "250px"]}
      mx='auto'
      rounded='md'
      shadow='2xl'
      overflow='hidden'
      mb='8'>
      <Box pos='relative' w='100%' h='180px'>
        <Image alt={alt} src={image} priority layout='fill' objectFit='fill' />
      </Box>
      <Text
        pt='2'
        color={color}
        fontSize='xl'
        fontWeight='semibold'
        textAlign='center'>
        {title}
      </Text>
      <Text fontSize='sm' textAlign='center' px='2' pb='2'>{desc}</Text>
    </Box>
  );
}

export default CuratedProjectsCard;
