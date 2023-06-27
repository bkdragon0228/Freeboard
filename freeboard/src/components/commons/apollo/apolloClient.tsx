import React, { useEffect } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, fromPromise } from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import { PropsWithChildren } from 'react';
import { createUploadLink } from 'apollo-upload-client'
import { useSetRecoilState, useRecoilState } from 'recoil';
import { tokenState } from '../../../../state/tokenState';
import { getAccessToken } from '../../../util/getAccessToken';

const GLOBAL_STATE = new InMemoryCache()

export default function ApolloClientSetting(props : PropsWithChildren<{}> ) {
  const [accessToken ,setAccessToken] = useRecoilState(tokenState)

  useEffect(()=>{
      void getAccessToken().then((accessToken) => {
        console.log('accessToken', accessToken)
        setAccessToken(accessToken ?? '')
      })
  },[])


  const errorLink = onError(({graphQLErrors, operation, forward}) => {
    if(graphQLErrors) {
      for(const error of graphQLErrors) {
        if(error.extensions.code === 'UNAUTHENTICATED') {

          return fromPromise(
            getAccessToken().then((accessToken) => {
              if(typeof accessToken !== 'string') return

              operation.setContext({
                headers : {
                  ...operation.getContext().headers,
                  Authorization : `Bearer ${accessToken}`
                }
              })
            })
          ).flatMap(() => forward(operation))
        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri : "https://backend-practice.codebootcamp.co.kr/graphql",
    headers : {
      Authorization : accessToken ? `Bearer ${accessToken}` : ''
    },
    credentials : 'include'
  })

  const client = new ApolloClient({
    link : ApolloLink.from([uploadLink as unknown as ApolloLink, errorLink]),
    cache: GLOBAL_STATE,
  });

  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
  )
}
