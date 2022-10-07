import { Box, IconButton } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import ContactUs from "../components/ContactUs";
import CuratedProjects from "../components/CuratedProjects";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
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
      <Box pos='relative'>
        <HeroSection />
        <OverviewSection />
        <Features />
        <CuratedProjects />
        <ContactUs />
        <Footer />

        {/* <WhatsAppWidget
          companyName='CodeMat Soft-lutions'
          phoneNumber='2348063856120'
        /> */}

        {scrollPosition > 500 && (
          <Link to='home' spy={true} smooth={true} offset={-80} duration={500}>
            <Box pos='fixed' bottom='90px' right={["24px", "84px"]} zIndex={1}>
              <IconButton
                icon={<FaChevronCircleUp size={40} />}
                colorScheme='purple'
                isRound={true}
                shadow='dark-lg'
              />
            </Box>
          </Link>
        )}
      </Box>
    </div>
  );
}
