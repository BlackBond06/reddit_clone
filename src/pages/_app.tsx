// import "@/styles/globals.css";
import { theme } from "../chakra/theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
