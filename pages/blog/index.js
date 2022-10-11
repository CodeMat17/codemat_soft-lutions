import { Box, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import BlogCard from "../../components/BlogCard";
import BlogNav from "../../components/BlogNav";
import BlogSocialLinks from "../../components/BlogSocialLinks";
import { supabase } from "../../utils/supabaseClient";

function BlogPost({ blogPosts }) {
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
            {blogPosts &&
              blogPosts.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id}>
                  <a>
                    <BlogCard {...blog} />
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
  const { data: blogPosts } = await supabase
    .from("blogPosts")
    .select("*")
    .order("id", {ascending: false});

  return {
    props: {
      blogPosts,
    },
    revalidate: 60
  };
}

export default BlogPost;
