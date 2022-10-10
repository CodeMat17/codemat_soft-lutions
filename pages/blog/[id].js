import {
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { HiOutlineNewspaper } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import BlogNav from "../../components/BlogNav";
import BlogSocialLinks from "../../components/BlogSocialLinks";
import Footer from "../../components/Footer";
import { supabase } from "../../utils/supabaseClient";
dayjs.extend(relativeTime);

function BlogDetail({ blogPost }) {
  const bg = useColorModeValue("purple.50", "");

  return (
    <Box bg={bg} minH='100vh'>
      <BlogNav />

      <HStack my='6' align='start' justify='space-between' maxW='6xl' mx='auto'>
        <Box pb='8' px='4' maxW='xl'>
          <Heading size={["xl", "2xl"]}>{blogPost?.title}</Heading>
          <HStack pb='6' fontSize='sm' color='gray' spacing='2' mt='2'>
            <Icon as={HiOutlineNewspaper} />
            <Text>
              Published {dayjs(blogPost?.created_at).format("MMM D, YYYY")}
            </Text>
            <Text>-</Text>
            <Text>{dayjs(blogPost?.created_at).fromNow()}</Text>
          </HStack>
          <ReactMarkdown>{blogPost?.content}</ReactMarkdown>
        </Box>
        <BlogSocialLinks />
      </HStack>

      <Footer />
    </Box>
  );
}

export const getStaticPaths = async () => {
  const { data: blogPosts } = await supabase.from("blogPosts").select("id");
  const paths = blogPosts.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: blogPost } = await supabase
    .from("blogPosts")
    .select("*")
    .eq("id", id)
    .single();

  if (!blogPost) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogPost,
    },
    revalidate: 86400,
  };
};

export default BlogDetail;
