import React from "react";
import { AppProps } from "next/app"
import { RecoilRoot } from "recoil";

import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";

import Head from "next/head";
import ApolloClientSetting from "../src/components/commons/apollo/apolloClient";
import Layout from "../src/components/commons/Layout";

export default function App({ Component, pageProps } : AppProps) {
  return (
    <>
      <Head>
        <title>파자마</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Grandiflora+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Grandiflora+One&family=Hahmlet&display=swap" rel="stylesheet"></link>
      </Head>
      <RecoilRoot>
        <ApolloClientSetting >
            <Layout>
              <Component {...pageProps} />;
            </Layout>
        </ApolloClientSetting>
      </RecoilRoot>
    </>
  );
}
