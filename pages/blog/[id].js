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

const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/mctony17/image/upload/v1665089325/Soft-lutions/Seo/logo.png";


function BlogDetail({ post, ogImage = DEFAULT_OG_IMAGE }) {
  const bg = useColorModeValue("purple.50", "");

  return (
    <div>
      <Head key={post?.id}>
        <title>CodeMat Soft-lutions | Blog Page</title>
        <meta
          name='description'
          content='CodeMat soft-lutions blog page. We write about websites and software solutions etc.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={post?.title} />
        <meta property='og:description' content={post?.desc} />
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='CodeMat Soft-lutions'
        />
        <meta
          property='og:url'
          content={`https://www.soft-lutions.com.ng/blog/${post?.id}`}
        />

        <meta
          key='og_image'
          property='og:image'
          content={ogImage ?? DEFAULT_OG_IMAGE}
        />
        <meta key='og_image:alt' property='og:image:alt' content='logo' />
        <meta key='og_image:width' property='og:image:width' content='300' />
        <meta key='og_image:height' property='og:image:height' content='300' />

        <meta name='robots' content='index,follow' />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta key='twitter:site' name='twitter:site' content='@Soft_lutions' />
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content='@Soft_lutions'
        />
        <meta
          key='twitter:title'
          property='twitter:title'
          content='CodeMat Soft-lutions'
        />
        <meta
          key='twitter:description'
          property='twitter:description'
          content={post?.desc}
        />
        <meta
          name='google-site-verification'
          content='R5a6Pc8cVlDlpcajdevQ8LqeAxSvSxNxMzc0ZTTI8ns'
        />
        <link rel='canonical' href='https://www.soft-lutions.com.ng' />

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
