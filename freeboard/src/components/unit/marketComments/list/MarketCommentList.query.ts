import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
    query FetchUseditemQuestions (
        $page : Int,
        $useditemId : ID!
    ) {
        fetchUseditemQuestions (
            page : $page,
            useditemId : $useditemId
        ) {
            _id
            contents
            user {
                name
                picture
                _id
            }
            createdAt
        }
    }
`

export const DELETE_USED_ITEM_QUESTION = gql`
    mutation DeleteUseditemQuestion ($useditemQuestionId : ID!) {
        deleteUseditemQuestion (useditemQuestionId : $useditemQuestionId)
    }
`