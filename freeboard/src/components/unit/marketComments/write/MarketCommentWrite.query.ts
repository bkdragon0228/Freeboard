import { gql } from "@apollo/client";

export const CREATED_USED_ITEM_QUESTION = gql`
    mutation CreateUseditemQuestion (
    $createUseditemQuestionInput : CreateUseditemQuestionInput!
    $useditemId: ID!
    ) {
        createUseditemQuestion (
            createUseditemQuestionInput : $createUseditemQuestionInput
            useditemId : $useditemId
        ) {
            _id

        }
    }
`