import React, { useEffect } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import { PropsWithChildren } from 'react';
import { createUploadLink } from 'apollo-upload-client'
import { useSetRecoilState, useRecoilState } from 'recoil';
import { tokenState } from '../../../../state/tokenState';

const GLOBAL_STATE = new InMemoryCache()

export default function ApolloClientSetting(props : PropsWithChildren<{}> ) {
  const [accessToken ,setAccessToken] = useRecoilState(tokenState)

  useEffect(()=>{
      if(localStorage.getItem("accessToken")){
      setAccessToken(localStorage.getItem("accessToken")||"")
    }
  },[])

  const uploadLink = createUploadLink({
    uri : "http://backendonline.codebootcamp.co.kr/graphql",
    headers : {
      Authorization : accessToken ? `Bearer ${accessToken}` : ''
    }
  })

  const client = new ApolloClient({
    link : ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: GLOBAL_STATE,
  });

  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
  )
}
