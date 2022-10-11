import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
