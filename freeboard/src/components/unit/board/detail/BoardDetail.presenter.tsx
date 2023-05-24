import { MouseEventHandler, useEffect, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./BoardDetail.styles";
import DaumPostcodeEmbed from 'react-daum-postcode';
import { EnvironmentOutlined } from '@ant-design/icons'
import ImageSlider from "../../../commons/ImageSlider";


export default function BoardDetailUI({
  data,
  handleDelete,
  handleMove,
  handleMoveEdit,
  handleLike,
  handleDisLike
} : {
  data : Pick<IQuery, "fetchBoard">;
  handleDelete : MouseEventHandler<HTMLButtonElement>;
  handleMove : MouseEventHandler<HTMLButtonElement>;
  handleMoveEdit : MouseEventHandler<HTMLButtonElement>;
  handleLike : MouseEventHandler<HTMLDivElement>;
  handleDisLike : MouseEventHandler<HTMLDivElement>
}) {

  console.log(data)

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  useEffect(() => {

    const listener = (boolean : boolean) => {
      setIsShowModal(boolean);
    }
    const a = document.querySelector('.AddressIcon');
    a.addEventListener('mouseover', () => listener(true))
    a.addEventListener('mouseout', () => listener(false))

    return () => {
      a.removeEventListener('mouseover', () => listener(true))
      a.removeEventListener('mouseout', () => listener(false))
    }
  }, [])
  return (
    <S.DetailContainer>
      {/* 컨텐츠 */}
      <S.ContentsWrapper>
        <S.UserInfoWrapper>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0001 0.666656C11.1201 0.666656 0.666748 11.12 0.666748 24C0.666748 36.88 11.1201 47.3333 24.0001 47.3333C36.8801 47.3333 47.3334 36.88 47.3334 24C47.3334 11.12 36.8801 0.666656 24.0001 0.666656ZM24.0001 7.66666C27.8734 7.66666 31.0001 10.7933 31.0001 14.6667C31.0001 18.54 27.8734 21.6667 24.0001 21.6667C20.1267 21.6667 17.0001 18.54 17.0001 14.6667C17.0001 10.7933 20.1267 7.66666 24.0001 7.66666ZM24.0001 40.8C18.1667 40.8 13.0101 37.8133 10.0001 33.2867C10.0701 28.6433 19.3334 26.1 24.0001 26.1C28.6434 26.1 37.9301 28.6433 38.0001 33.2867C34.9901 37.8133 29.8334 40.8 24.0001 40.8Z"
              fill="#BDBDBD"
            />
          </svg>
          <div style={{ position: "relative" }}>
            <S.Writer>{data && data.fetchBoard.writer}</S.Writer>
            <S.CreateDate>
              Date : {data && data.fetchBoard.createdAt}
            </S.CreateDate>
          </div>
          <S.UserButtonContainer>
            <S.UserButton>
              <svg
                width="28"
                height="14"
                viewBox="0 0 28 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6666 0.333328H15.3333V2.99999H20.6666C22.8666 2.99999 24.6666 4.79999 24.6666 6.99999C24.6666 9.19999 22.8666 11 20.6666 11H15.3333V13.6667H20.6666C24.3466 13.6667 27.3333 10.68 27.3333 6.99999C27.3333 3.31999 24.3466 0.333328 20.6666 0.333328ZM12.6666 11H7.33329C5.13329 11 3.33329 9.19999 3.33329 6.99999C3.33329 4.79999 5.13329 2.99999 7.33329 2.99999H12.6666V0.333328H7.33329C3.65329 0.333328 0.666626 3.31999 0.666626 6.99999C0.666626 10.68 3.65329 13.6667 7.33329 13.6667H12.6666V11ZM8.66663 5.66666H19.3333V8.33333H8.66663V5.66666Z"
                  fill="#FFD600"
                />
              </svg>
            </S.UserButton>
              <S.AddressIcon className="AddressIcon"/>
          </S.UserButtonContainer>

          {
            isShowModal &&
              <S.AddressModal>
                <span>{data?.fetchBoard.boardAddress?.zipcode}</span>
                <span>{data?.fetchBoard.boardAddress?.address}</span>
              </S.AddressModal>
          }


        </S.UserInfoWrapper>
        <S.MainContents>
          <S.Title>{data && data.fetchBoard.title}</S.Title>
          {/* <S.MainImage /> */}
          <ImageSlider width={800} height={400} images={data?.fetchBoard.images}/>
          <S.Contents>{data && data.fetchBoard.contents}</S.Contents>
        </S.MainContents>
        <S.SideContents>
          <S.VideoContainer>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.6" cx="24" cy="24" r="24" fill="white" />
            </svg>
          </S.VideoContainer>
          <S.StatusContainer>
            <S.Like
              onClick={handleLike}
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.11 3.72L10.54 6.61C10.42 7.2 10.58 7.81 10.96 8.27C11.34 8.73 11.9 9 12.5 9H18V10.08L15.43 16H7.34C7.16 16 7 15.84 7 15.66V7.82L11.11 3.72V3.72ZM12 0L5.59 6.41C5.21 6.79 5 7.3 5 7.83V15.66C5 16.95 6.05 18 7.34 18H15.44C16.15 18 16.8 17.63 17.16 17.03L19.83 10.88C19.94 10.63 20 10.36 20 10.08V9C20 7.9 19.1 7 18 7H12.5L13.42 2.35C13.47 2.13 13.44 1.89 13.34 1.69C13.11 1.24 12.82 0.83 12.46 0.47L12 0ZM2 7H0V18H2C2.55 18 3 17.55 3 17V8C3 7.45 2.55 7 2 7Z"
                  fill="#FFD600"
                />
              </svg>
              <br />
              <div>{data && data.fetchBoard.likeCount}</div>
            </S.Like>
            <S.DisLike
              onClick={handleDisLike}
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0H5C4.17 0 3.46 0.5 3.16 1.22L0.14 8.27C0.05 8.5 0 8.74 0 9V11C0 12.1 0.9 13 2 13H8.31L7.36 17.57L7.33 17.89C7.33 18.3 7.5 18.68 7.77 18.95L8.83 20L15.42 13.41C15.78 13.05 16 12.55 16 12V2C16 0.9 15.1 0 14 0ZM14 12L9.66 16.34L11 11H2V9L5 2H14V12ZM18 0H22V12H18V0Z"
                  fill="#828282"
                />
              </svg>
              <br />
              <div>{data && data.fetchBoard.dislikeCount}</div>
            </S.DisLike>
          </S.StatusContainer>
        </S.SideContents>
      </S.ContentsWrapper>
      {/* 컨텐츠 x */}
      <S.MenuContainer>
        <S.MenuButton onClick={handleMove}>목록으로</S.MenuButton>
        <S.MenuButton onClick={handleMoveEdit}>수정하기</S.MenuButton>
        <S.MenuButton onClick={handleDelete}>삭제하기</S.MenuButton>
      </S.MenuContainer>
    </S.DetailContainer>
  );
}
