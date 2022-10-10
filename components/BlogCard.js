import {
  Box,
  Divider,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { HiOutlineNewspaper } from "react-icons/hi";
import ReactMarkdown from 'react-markdown'
dayjs.extend(relativeTime);

function BlogCard({ title, content, created_at }) {
  const color = useColorModeValue("gray.700", "");

  return (
    <Box>
      <Text fontWeight='bold' fontSize={["2xl", "3xl"]} maxW='md'>
        {title}
      </Text>
      <Text color={color} mt='2' noOfLines='3' fontSize='lg' maxW='xl'>{ content}</Text>
      {/* <chakra.ReactMarkdown children={content} /> */}
      <HStack fontSize='sm' color='gray' spacing='2' mt='2'>
        <Icon as={HiOutlineNewspaper} />
        <Text>Published {dayjs(created_at).format("MMM D, YYYY")}</Text>
        <Text>-</Text>
        <Text>{dayjs(created_at).fromNow()}</Text>
      </HStack>
      <Divider mt='4' />
    </Box>
  );
}

export default BlogCard;
