import { gql } from "@apollo/client";



export const FETCH_USED_ITEMS_I_SOLD = gql`
    query FetchUsedItemsISold ($search : String, $Page : Int) {
        fetchUseditemsISold (
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
            seller {
                _id
                name
                picture
            }
        }
    }
`

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
            seller {
                _id
                name
                picture
            }
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
