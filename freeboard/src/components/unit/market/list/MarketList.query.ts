import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
    query FetchUseditems (
        $isSoldout : Boolean,
        $search : String,
        $page : Int
    ) {
        fetchUseditems (
            isSoldout : $isSoldout,
            search : $search,
            page : $page
        ) {
            _id
            name
            remarks
            contents
            price
            tags
            images
            pickedCount
        }
    }
`

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
