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
import Head from "next/head";
import { HiOutlineNewspaper } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import BlogNav from "../../components/BlogNav";
import BlogSocialLinks from "../../components/BlogSocialLinks";
import Footer from "../../components/Footer";
import { supabase } from "../../utils/supabaseClient";
dayjs.extend(relativeTime);

function BlogDetail({ post }) {
  const bg = useColorModeValue("purple.50", "");

  return (
    <div>
      <Head>
        <title>CodeMat Soft-lutions | Blog Page</title>
        <meta
          name='description'
          content='At CodeMat soft-lutions blog page, we write articles about websites and other software solutions such as eCommerce, school management, hotel management etc.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box bg={bg} minH='100vh'>
        <BlogNav />

        <HStack
          my='6'
          align='start'
          justify='space-between'
          maxW='6xl'
          mx='auto'>
          <Box pb='8' px='4' maxW='xl'>
            <Heading size={["xl", "2xl"]}>{post?.title}</Heading>
            <HStack pb='6' fontSize='sm' color='gray' spacing='2' mt='2'>
              <Icon as={HiOutlineNewspaper} />
              <Text>
                Published {dayjs(post?.created_at).format("MMM D, YYYY")}
              </Text>
              <Text>-</Text>
              <Text>{dayjs(post?.created_at).fromNow()}</Text>
            </HStack>
            <ReactMarkdown>{post?.content}</ReactMarkdown>
          </Box>
          <BlogSocialLinks />
        </HStack>

        <Footer />
      </Box>
    </div>
  );
}

export const getStaticPaths = async () => {
  const { data: posts } = await supabase.from("posts").select("id");
  const paths = posts.map(({ id }) => ({
    params: {
      // id: id.toString(),
      id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .match({ id })
    .single();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogDetail;
