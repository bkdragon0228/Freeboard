import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
    mutation createUsedItem($createUseditemInput : CreateUseditemInput!) {
        createUseditem (createUseditemInput : $createUseditemInput) {
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