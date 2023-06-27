import { GraphQLClient, gql } from 'graphql-request'


interface IRestoreToken {
    restoreAccessToken : {
        accessToken : string
    }
}

const RESTORE_ACCESS_TOKEN = gql`
        mutation restoreAccessToken {
            restoreAccessToken {
                accessToken
            }
        }
    `

export const getAccessToken = async () => {
    try {
        const graphqlClient = new GraphQLClient(
            'https://backend-practice.codebootcamp.co.kr/graphql',
            {
                credentials : 'include'
            }
        )

        const result = await graphqlClient.request<IRestoreToken>(RESTORE_ACCESS_TOKEN)
        const newAccessToken = result?.restoreAccessToken.accessToken


        return newAccessToken
    } catch (error) {
        console.log(error)
    }
}