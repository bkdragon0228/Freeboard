import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import { PropsWithChildren } from 'react';
import { createUploadLink } from 'apollo-upload-client'

const uploadLink = createUploadLink({
  uri : "http://backendonline.codebootcamp.co.kr/graphql"
})

const client = new ApolloClient({
    link : ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

export default function ApolloClientSetting(props : PropsWithChildren<{}> ) {
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
  )
}
