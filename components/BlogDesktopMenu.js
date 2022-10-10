import { Box, Button, HStack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

function BlogDesktopMenu() {
  const router = useRouter();
  const btnBg = useColorModeValue("gray.600", "gray.700");
  const btnColor = useColorModeValue("gray.300", "white");

  return (
    <Box display={{ base: "none", md: "flex" }}>
      <HStack>
        <Button
          onClick={() => router.push("/")}
          variant='ghost'
          _hover={{ bg: btnBg }}
          color='white'
          letterSpacing='1px'>
          HOME
        </Button>
        <Button
          onClick={() => router.push("/blog")}
          variant='ghost'
          _hover={{ bg: btnBg }}
          color='white'
          letterSpacing='1px'>
          BLOG POSTS
        </Button>
      </HStack>
    </Box>
  );
}

export default BlogDesktopMenu;
