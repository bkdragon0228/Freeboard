import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query FetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      images
      createdAt
      likeCount
      dislikeCount
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
      user {
        _id
        email
        name
        picture
      }
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;


export const LIKE_BOARD = gql`
  mutation likeBoard($boardId : ID!){
    likeBoard(boardId : $boardId)
  }
`

export const DISLIKE_BOARD = gql`
  mutation disLikeBoard($boardId : ID!) {
    dislikeBoard (boardId : $boardId)
  }
`