import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../commons/types/generated/types";

export type TBestUseditemsQuery = Pick<IQuery, 'fetchUseditemsOfTheBest'>

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
    query {
        fetchUseditemsOfTheBest {
            _id
            name
            remarks
            price
            tags
            images
            pickedCount
        }
    }
`

export default function useBestUseditems () {
    return useQuery<TBestUseditemsQuery>(FETCH_USED_ITEMS_OF_THE_BEST)
}