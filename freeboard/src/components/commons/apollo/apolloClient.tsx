import React, { useEffect } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, fromPromise } from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import { PropsWithChildren } from 'react';
import { createUploadLink } from 'apollo-upload-client'
import { useSetRecoilState, useRecoilState, useRecoilValueLoadable } from 'recoil';
import { tokenState, restoreAccessTokenLoadble} from '../../../../state/tokenState';
import { getAccessToken } from '../../../util/getAccessToken';
import { useRouter } from 'next/router';

const GLOBAL_STATE = new InMemoryCache()

export default function ApolloClientSetting(props : PropsWithChildren<{}> ) {
  const router = useRouter()
  const [accessToken ,setAccessToken] = useRecoilState(tokenState)
  const restoreToken = useRecoilValueLoadable(restoreAccessTokenLoadble)


  useEffect(()=>{
    switch (restoreToken.state) {
      case 'hasValue':
        setAccessToken(restoreToken.contents)
        return

      case 'hasError':
        alert('로그인 기한이 만료되었습니다.')
        router.push('/')
    }

  },[restoreToken])


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
