import { Box, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import BlogCard from "../../components/BlogCard";
import BlogNav from "../../components/BlogNav";
import BlogSocialLinks from "../../components/BlogSocialLinks";
import { supabase } from "../../utils/supabaseClient";

function BlogPost({ posts }) {
  const bg = useColorModeValue("purple.50", "");

  return (
    <Box bg={bg} minH='100vh'>
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
    revalidate: 86400,
  };
};

export default BlogPost;
