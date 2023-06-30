import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../commons/types/generated/types";

export type TBestBoardsQuery = Pick<IQuery, 'fetchBoardsOfTheBest'>

const FETCH_BOARDS_OF_THE_BEST = gql`
    query {
        fetchBoardsOfTheBest {
            _id
            writer
            title
            contents
            images
            user {
                _id
                picture
            }
        }
    }
`

export default function useBestBoards () {
    return useQuery<TBestBoardsQuery>(FETCH_BOARDS_OF_THE_BEST)
}

