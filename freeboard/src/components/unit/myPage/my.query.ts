import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_SOLD = gql`
    query FetchUseditemsISold (
        $search : String,
        $page : Int
    ){
        fetchUseditemsISold (
            search : $search,
            page : $page
        ) {
            _id
            name
            price
            createdAt
            seller {
                _id
                name
            }
        }
    }
`
export const FETCH_USED_ITEMS_I_PICKED = gql`
    query FetchUseditemsIPicked (
        $search : String,
        $page : Int
    ){
        fetchUseditemsIPicked (
            search : $search,
            page : $page
        ) {
            _id
            name
            price
            createdAt
            seller {
                _id
                name
            }
        }
    }

`

