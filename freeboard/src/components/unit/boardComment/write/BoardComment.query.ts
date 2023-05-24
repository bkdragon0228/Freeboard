import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMNET = gql`
    mutation createBoardComment($createBoardCommentInput : CreateBoardCommentInput! , $boardId : ID!) {
        createBoardComment (createBoardCommentInput : $createBoardCommentInput, boardId : $boardId ) {
            _id
            writer
            contents
            rating
            createdAt
        }
    }
`
export const UPDATE_BOARD_COMMNETS = gql`
    mutation updateBoardComment (
            $updateBoardCommentInput : UpdateBoardCommentInput!,
            $password : String,
            $boardCommentId : ID!
        ){
            updateBoardComment (
                updateBoardCommentInput : $updateBoardCommentInput,
                password : $password,
                boardCommentId : $boardCommentId
            ) {
                _id
                writer
                contents
                rating
                user {
                    _id
                }
                createdAt
                updatedAt
                deletedAt
            }
        }
`