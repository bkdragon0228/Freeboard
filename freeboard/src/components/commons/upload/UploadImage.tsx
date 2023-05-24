import React, { ChangeEvent, useRef } from 'react';

import styled from '@emotion/styled'
import { useMutation } from '@apollo/client';
import { IMutation, IMutationUploadFileArgs } from '../../../commons/types/generated/types';
import { UPLOAD_FILE } from '../../unit/board/write/BoardWrite.queries';

interface UploadImageProps {
    onChangeImages : (url : string, index : number) => void;
    imageUrl : string;
    index : number;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`

const UploadBtn = styled.button`
  width: 78px;
  height: 78px;
  text-align: center;
  background-color: #bdbdbd;
  margin-right: 24px;
  border: none;
  cursor: pointer;
`;

const UploadedImage = styled.img`
    width: 78px;
    height: 78px;
    text-align: center;
`
const HiddenInput = styled.input`
    display: none;
`

const UploadImage  : React.FC<UploadImageProps> = ({
    imageUrl,
    index,
    onChangeImages,
}) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [uploadImage] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE)

    const onClickUpload = () => {
        inputRef.current?.click()
    }

    const onChangeInputFile = async (e : ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]

        if(!file.type.includes('jpeg') && !file.type.includes('png')) {
            alert('jpeg, png 파일만 업로드 가능합니다.')
            return
          }

        try {
            const result = await uploadImage({
                variables : {
                    file
                }
            })
            onChangeImages(result.data.uploadFile.url, index)
        } catch(error) {
            console.log(error)
        }
    }
    return (
        <Container>
            {
                !imageUrl ? (
                    <UploadBtn onClick={onClickUpload}>+ upload</UploadBtn>
                ) : (
                    <UploadedImage src={`https://storage.googleapis.com/${imageUrl}`} onClick={onClickUpload}/>
                )
            }
            <HiddenInput type='file' ref={inputRef} onChange={onChangeInputFile}/>
        </Container>
    );
};

export default UploadImage;