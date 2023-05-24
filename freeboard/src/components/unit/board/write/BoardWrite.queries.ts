import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation CreateBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
    }
  }
`;


export const UPLOAD_FILE = gql`
  mutation uploadFile($file : Upload!) {
    uploadFile(file : $file) {
      _id
      url
      size
      isUsed
      createdAt
      updatedAt
      deletedAt
    }
  }
`