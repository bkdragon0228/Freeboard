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

export const UPDATE_USED_ITEM_QUESTION = gql`
    mutation UpdateUseditemQuestion (
        $updateUseditemQuestionInput : UpdateUseditemQuestionInput!,
        $useditemQuestionId : ID!
    ){
        updateUseditemQuestion (
            updateUseditemQuestionInput : $updateUseditemQuestionInput,
            useditemQuestionId : $useditemQuestionId
        ) {
            _id
        }
    }
`

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
    query FetchUseditemQuestionAnswers (
        $page : Int,
        $useditemQuestionId : ID!
    ) {
        fetchUseditemQuestionAnswers (
            page : $page,
            useditemQuestionId : $useditemQuestionId
        ) {
            _id
            contents
            useditemQuestion {
                _id
            }
            user {
                _id
                name
                picture
            }
            createdAt
        }
    }
`