import Head from "next/head";

import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import "@fontsource/tajawal";

import { RtlProvider } from "../components/rtl-provider";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Tajawal, sans-serif",
    body: "Tajawal, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
          <title>الباحث الفقهي</title>
          <meta
            name="description"
            content="خدمة تسهل الوصول إلى المسائل الفقهية على المذاهب الأربعة"
          />
        </Head>
        <Navbar />
        <Container pt={4}>
          <Component {...pageProps} />
        </Container>
      </RtlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
