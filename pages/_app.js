import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import theme from "../theme";

import { ChakraProvider } from "@chakra-ui/react";
import NavHeader from "../components/NavHeader";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NavHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
