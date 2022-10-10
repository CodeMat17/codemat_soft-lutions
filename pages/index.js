import { Box, IconButton, VStack } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-scroll";
import ContactUs from "../components/ContactUs";
import CuratedProjects from "../components/CuratedProjects";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavHeader from "../components/NavHeader";
import OverviewSection from "../components/OverviewSection";

export default function Home() {
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
      <Head>
        <title>CodeMat Soft-lutions | Home</title>
        <meta
          name='description'
          content='CodeMat soft-lutions is a software solutions company that specializes in building sleek mobile web websites and applications like ecommerce apps etc.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavHeader />
      <Box pos='relative'>
        <HeroSection />
        <OverviewSection />
        <Features />
        <CuratedProjects />
        <ContactUs />
        <Footer />

        <Box
          // border='1px'
          p='3'
          bg='green'
          rounded='full'
          pos='fixed'
          bottom={scrollPosition > 500 ? "100px" : "28px"}
          right={["16px", "84px"]}
          zIndex={1}>
          {/* <NextLink href='https://wa.link/98f4ao'> */}
          <NextLink href='https://wa.me/+2348063856120?text=Hello! CodeMat Soft-lutions'>
            <IconButton
              icon={<SiWhatsapp size={40} />}
              bg='green'
              isRound={true}
              shadow='dark-lg'
            />
          </NextLink>
        </Box>

        {scrollPosition > 500 && (
          <Link to='home' spy={true} smooth={true} offset={-80} duration={500}>
            <VStack
              p='3'
              bg='purple.700'
              rounded='full'
              pos='fixed'
              bottom='28px'
              right={["16px", "84px"]}
              zIndex={1}>
              <IconButton
                // size='lg'
                icon={<FaChevronCircleUp size={40} />}
                colorScheme='purple'
                isRound={true}
                shadow='dark-lg'
              />
            </VStack>
          </Link>
        )}
      </Box>
    </div>
  );
}
