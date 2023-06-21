import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
    mutation createUsedItem($createUsedItemInput : CreateUseditemInput!) {
        createUseditem (createUseditemInput : $createUsedItemInput) {
            _id
            name
            remarks
            contents
            price
            tags
            images
            seller {
                _id
                name
                picture
            }
            createdAt
        }
    }
`