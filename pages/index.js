import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import { MdOutlineMarkEmailRead, MdOutlineWifiCalling3 } from "react-icons/md";
import { RiWechatLine } from "react-icons/ri";
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
  const btnColor = useColorModeValue("purple.900", "white");
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
          p='2'
          bg='green'
          rounded='full'
          pos='fixed'
          bottom={scrollPosition > 500 ? "100px" : "28px"}
          right={["16px", "84px"]}
          zIndex={1}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<RiWechatLine size={40} />}
              isRound
              size='lg'
            />
            <MenuList>
              <MenuItem
                as='a'
                href='tel:+2348063856120'
                icon={<MdOutlineWifiCalling3 size={25} />}>
                Call us
              </MenuItem>
              <MenuItem
                as='a'
                href='https://wa.me/+2348063856120?text=Hello! CodeMat Soft-lutions'
                icon={<SiWhatsapp size={25} color='green' />}>
                Chat with us on WhatsApp
              </MenuItem>
              <MenuItem
                as='a'
                href='mailto:codemat.biz@gmail.com?subject=Business Email'
                icon={<MdOutlineMarkEmailRead size={25} color='tomato' />}>
                Send an email to us
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {scrollPosition > 500 && (
          <Link to='home' spy={true} smooth={true} offset={-80} duration={500}>
            <VStack
              p='2'
              bg='purple.700'
              rounded='full'
              pos='fixed'
              bottom='28px'
              right={["16px", "84px"]}
              zIndex={1}>
              <IconButton
                icon={<FaChevronCircleUp size={40} />}
                colorScheme='purple'
                size='lg'
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
