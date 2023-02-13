import { Box, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function CuratedProjectsCard({ title, alt, image, desc, link }) {
   const bg = useColorModeValue("gray.100", "gray.700");
   const color = useColorModeValue("purple.900", "");
  
  return (
    <Box
      pos='relative'
      bg={bg}
      w={["270px", "300px", "250px"]}
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
      <Text fontSize='sm' textAlign='center' px='2' pb='2'>
        {desc}
      </Text>
      <Link href={link} _target='_blank'>
        <Tag cursor='pointer'
          pos='absolute'
          right='2'
          bottom='70px'
          variant='outline'
          rounded='full'
          size='sm'
          color='white'>
          view site
        </Tag>
      </Link>
    </Box>
  );
}

export default CuratedProjectsCard;
