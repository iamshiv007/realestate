import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <Box maxWidth="1280px" m="auto">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Box>
      </Head>
    </>
  );
};

export default Layout;
