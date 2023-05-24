import React from "react";
import { AppProps } from "next/app"
import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import ApolloClientSetting from "../src/components/commons/apollo/apolloClient";
import Layout from "../src/components/commons/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps } : AppProps) {
  return (
    <>
      <ApolloClientSetting >
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />;
            </Layout>
          </RecoilRoot>
      </ApolloClientSetting>
    </>
  );
}
