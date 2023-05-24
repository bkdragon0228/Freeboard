import * as S from "./BoardWrite.styles";
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { ErrorMessage } from "@hookform/error-message";
import {BoardWriteProp} from "./BoardWrite.types"
import { Modal } from 'antd';
import { useState } from "react";
import UploadImage from "../../../commons/upload/UploadImage";

export default function BoardWriteUI({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
  isAble,
  isEdit,
  boardData,
  setFormValue,
  images,
  onChangeImages
} :
  BoardWriteProp
) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState<string>('');
  const [zoneCode, setZoneCode] = useState<string>('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const handleComplete = (data : Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setZoneCode(data.zonecode)
    setAddress(fullAddress)
    setFormValue('address', fullAddress)
    setFormValue('zipcode', data.zonecode)
    setIsModalOpen(false)

    // console.log(address, zoneCode); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  return (
    <S.Container>
      <S.Header>
        <h2>게시물 {isEdit ? "수정" : "등록"}</h2>
      </S.Header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.WriterWrapper>
            <S.InputWrapper>
              <S.Label>작성자</S.Label>
              <S.Writer
                placeholder="이름을 적어주세요."
                type="text"
                {...register("writer", { required: "This is required" })}
                defaultValue={boardData?.writer}
              />
              <S.Error>
                <ErrorMessage
                  errors={errors}
                  name="writer"
                  render={({ message }) => <p>{message}</p>}
                />
              </S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <S.Password
                placeholder="비밀번호를 입력해주세요."
                type="password"
                {...register("password", {
                  required: "This is required",
                  minLength: { value: 4, message: "This input min-width is 8" },
                })}
              />
              <S.Error>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  }
                />
              </S.Error>
            </S.InputWrapper>
          </S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>제목</S.Label>
            <S.Subject
              placeholder="제목을 작성해주세요."
              {...register("title", { required: "This is required" })}
              defaultValue={boardData?.title}
            />
            <S.Error>
              <ErrorMessage
                errors={errors}
                name="title"
                render={({ message }) => <p>{message}</p>}
              />
            </S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>내용</S.Label>
            <S.Content
              placeholder="내용을 작성해주세요."
              {...register("content", { required: "This is required" })}
              defaultValue={boardData?.contents}
            />
            <S.Error>
              <ErrorMessage
                errors={errors}
                name="content"
                render={({ message }) => <p>{message}</p>}
              />
            </S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.ZipcodeWrapper>
              <S.Zipcode
                readOnly
                placeholder="07250"
                // value={zoneCode || boardData?.boardAddress?.zipcode || ''}
                {...register('zipcode', {value : zoneCode || boardData?.boardAddress?.zipcode || '', })}
              />
              <S.SearchBtn onClick={showModal} type="button">우편번호 검색</S.SearchBtn>
              {isModalOpen &&
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <DaumPostcodeEmbed onComplete={handleComplete}/>
                </Modal>
              }
            </S.ZipcodeWrapper>
            <S.Address
              readOnly
              // value={address || boardData?.boardAddress?.address || ''}
              {...register('address', {value : address || boardData?.boardAddress?.address || '' })}

            />
            <S.Address defaultValue={boardData?.boardAddress?.addressDetail} {...register("addressDetail")}/>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>유튜브</S.Label>
            <S.LinkUrl
              placeholder="링크를 복사해주세요."
              {...register("youtubeUrl")}
            />
          </S.InputWrapper>
          <S.OptionWrapper>
            <S.Label>사진 첨부</S.Label>
            {
              images.map((url, index) => (
                <UploadImage
                  key={index}
                  imageUrl={url}
                  index={index}
                  onChangeImages={onChangeImages}
                />
              ))
            }
          </S.OptionWrapper>
          <S.OptionWrapper>
            <S.Label>메인 설정</S.Label>
            <S.RadionBtn
              type="radio"
              id="youtube"
              value="youtube"
              name="main_setting"
              {...register("main")}
            />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.RadionBtn
              type="radio"
              id="image"
              value="image"
              name="main_setting"
              {...register("main")}
            />
            <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
          </S.OptionWrapper>
          <S.ButtonWrapper>
            {isEdit && (
              <S.Button type="submit" disabled={isSubmitting} isAble={true}>
                수정하기
              </S.Button>
            )}

            {!isEdit && (
              <S.Button type="submit" disabled={isSubmitting} isAble={isAble}>
                {isEdit ? "수정하기" : "등록하기"}
              </S.Button>
            )}
          </S.ButtonWrapper>
        </form>
      </main>
    </S.Container>
  );
}
