import { Box, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import BlogNav from "../../components/BlogNav";
import BlogSocialLinks from "../../components/BlogSocialLinks";
import ScrollBtn from "../../components/ScrollBtn";
import { supabase } from "../../utils/supabaseClient";
import MultiLinkMenu from "../../components/MultiLinkMenu";

const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/mctony17/image/upload/v1665089325/Soft-lutions/Seo/logo.png";

function BlogPost({ posts, ogImage = DEFAULT_OG_IMAGE }) {
  const bg = useColorModeValue("purple.50", "");

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scrol", handleScroll);
    };
  }, []);

  return (
    <div>
      {posts?.map((seoItem) => (
        <Head key={seoItem.id}>
          <title>CodeMat Soft-lutions | Blog Page</title>
          <meta
            name='description'
            content='CodeMat soft-lutions blog page. We write about websites and software solutions etc.'
          />
          <meta
            name='google-site-verification'
            content='R5a6Pc8cVlDlpcajdevQ8LqeAxSvSxNxMzc0ZTTI8ns'
          />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={seoItem.title} />
          <meta
            property='og:description'
            content='CodeMat soft-lutions is a software solutions company that specializes in building sleek mobile web websites and applications like ecommerce apps etc.'
          />
          <meta key='og_locale' property='og:locale' content='en_IE' />
          <meta
            key='og_site_name'
            property='og:site_name'
            content='CodeMat Soft-lutions'
          />
          <meta
            property='og:url'
            content={`https://www.soft-lutions.com.ng/blog/${seoItem.id}`}
          />

          <meta
            key='og_image'
            property='og:image'
            content={ogImage ?? DEFAULT_OG_IMAGE}
          />
          <meta key='og_image:alt' property='og:image:alt' content='logo' />
          <meta key='og_image:width' property='og:image:width' content='300' />
          <meta
            key='og_image:height'
            property='og:image:height'
            content='300'
          />

          <meta name='robots' content='index,follow' />

          <meta
            key='twitter:card'
            name='twitter:card'
            content='summary_large_image'
          />
          <meta
            key='twitter:site'
            name='twitter:site'
            content='@Soft_lutions'
          />
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
            content='CodeMat soft-lutions is a software solutions company that specializes in building sleek mobile web websites and applications like ecommerce apps etc.'
          />

          <link rel='canonical' href='https://www.soft-lutions.com.ng' />

          <link rel='icon' href='/favicon.ico' />
        </Head>
      ))}

      <Box id='home' bg={bg} minH='100vh'>
        <BlogNav />
        <Box px={[4, 4, 8]} py='8' maxW='6xl' mx='auto'>
          <Heading size={["2xl", "3xl", "4xl"]} maxW='2xl'>
            Welcome to our blog channel
          </Heading>
          <HStack mt='12' mb='6' align='start' justify='space-between'>
            <Box pb='8'>
              {posts &&
                posts.map((post) => (
                  <Link href={`/blog/${post.id}`} key={post.id}>
                    <a>
                      <BlogCard {...post} />
                    </a>
                  </Link>
                ))}
            </Box>
            <BlogSocialLinks />
          </HStack>
        </Box>
      </Box>

      <Box
        p='2'
        bg='green'
        rounded='full'
        pos='fixed'
        bottom={scrollPosition > 500 ? "100px" : "28px"}
        right={["16px", "84px"]}
        zIndex={1}>
        <MultiLinkMenu />
      </Box>

      {scrollPosition > 500 && (
        <ScrollLink
          to='home'
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}>
          <ScrollBtn />
        </ScrollLink>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  return {
    props: {
      posts,
    },
  };
};

export default BlogPost;
