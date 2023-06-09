import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
    query FetchUsedItem (
            $useditemId : ID!
        ) {
            fetchUseditem (
                useditemId : $useditemId
            ) {
                _id
                name
                remarks
                contents
                price
                tags
                images
                pickedCount
                useditemAddress {
                    zipcode
                    address
                    addressDetail
                    lat
                    lng
                }
                seller {
                    _id
                    name
                    picture
                }
                soldAt
                createdAt
            }
    }
`

export const TOGGLE_USED_ITEM_PICK = gql`
    mutation toggleUseditemPick (
        $useditemId : ID!
    ){
        toggleUseditemPick (
            useditemId : $useditemId
        )
    }
`