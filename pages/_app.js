import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import NavHeader from "../components/NavHeader";
import Seo from "../components/Seo";
import theme from "../theme";

function MyApp({ Component, pageProps, canonical }) {
  return (
    <>
      <Seo canonical={canonical} />
      <ChakraProvider theme={theme}>
       
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  const isProd = process.env.NODE_ENV === "production";
  const base = isProd
    ? "https://www.soft-lutions.com.ng"
    : "http://localhost:3000";
  const { asPath } = ctx;
  const canonical = base + asPath;

  return {
    canonical,
  };
};

export default MyApp;
