import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../commons/types/generated/types";

const FETCH_USER_LOGGEDIN = gql`
    query {
        fetchUserLoggedIn {
            _id
            email
            name
            picture
        }
    }
`


export default function useUser () {
    return useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGEDIN)
}