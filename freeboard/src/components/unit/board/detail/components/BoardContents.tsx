import React from 'react';
import { BoardContentsProps } from '../BoardDetail.type'

import * as S from '../BoardDetail.styles'
import ImageSlider from '../../../../commons/ImageSlider';
import { contents } from '../../../main/main.style';

const BoardContents : React.FC<BoardContentsProps>= ({
    boardContents,
    handleDisLike,
    handleLike
}) => {
    return (
        <>
            <S.MainContents>
                <S.Title>{boardContents?.title}</S.Title>
                {/* <S.MainImage /> */}
                <ImageSlider width={800} height={400} images={boardContents?.images}/>
                <S.Contents>{boardContents?.contents}</S.Contents>
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
                    <div>{boardContents?.likeCount}</div>
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
                    <div>{boardContents?.dislikeCount}</div>
                    </S.DisLike>
                </S.StatusContainer>
            </S.SideContents>
        </>

    );
};

export default BoardContents;