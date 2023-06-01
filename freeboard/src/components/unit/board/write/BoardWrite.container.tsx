import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { boardState } from "../../../../../state/boardState";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { BoardWriteProps, FormData } from "./BoardWrite.types"
import withAuth from "../../../../hoc/withAuth";

const BoardWrite : React.FC<BoardWriteProps> = ({ isEdit }) => {
  const router = useRouter();
  const [isAble, setIsAble] = useState<boolean>(false);
  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  // global state
  const [boardData, setBoardData] = useRecoilState(boardState);

  const [images, setImages] = useState<string[]>(['', '', '']);

  useEffect(() => {
    if(!boardData) return
    setImages(boardData?.images)
  }, [boardData?.images])

  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    setValue : setFormValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    criteriaMode: "all",
  });

  const { writer, password, title, content , address, addressDetail, zipcode} = watch();

  useEffect(() => {
    if (writer && password && title && content) {
      setIsAble(true);
    } else {
      setIsAble(false);
    }
  }, [writer, password, title, content, isAble]);

  const onChangeImages = (url : string, index: number) => {
    const newImages = [...images]
    newImages[index] = url
    setImages(newImages)
  }

  const onSubmit = async (formdata : FormData) => {
    await new Promise((r) => setTimeout(r, 3000)); // 3초 지연

    if (!isEdit) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: formdata.writer,
              password: formdata.password,
              title: formdata.title,
              contents: formdata.content,
              youtubeUrl: "",
              boardAddress: {
                zipcode: formdata.zipcode,
                address: formdata.address,
                addressDetail: formdata.addressDetail,
              },
              images: images.filter((url) => url !== '')
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD,
              variables: {
                boardId: router.query.boardId,
              },
            },
          ],
        });

        const data = await result.data.createBoard;

        alert("게시글이 성공적으로 등록되었습니다.");
        router.push(`/boards/${data._id}`);
      } catch (err) {
        throw err;
      }
    }

    if (isEdit) {
      let updateBoardInput : IUpdateBoardInput = {};
      if (title) updateBoardInput.title = title;
      if (content) updateBoardInput.contents = content;
      if (address || addressDetail || zipcode) {
        updateBoardInput.boardAddress = {}

        if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
        if (address) updateBoardInput.boardAddress.address = address;
        if (addressDetail) updateBoardInput.boardAddress.addressDetail = addressDetail;
      }
      const currentFiles = JSON.stringify(images)
      const defaultFiles = JSON.stringify(boardData?.images)
      const isChangedFiles = currentFiles !== defaultFiles

      if(isChangedFiles) updateBoardInput.images = images

      try {
        const result = await updateBoard({
          variables: {
            updateBoardInput: {
              ...updateBoardInput,
            },
            password: formdata.password,
            boardId: router.query.boardId as string,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD,
              variables: { BoardId: router.query.BoardId },
            },
          ],
        });
        alert("게시글이 성공적으로 수정되었습니다.");
        router.push(`/boards/${result.data.updateBoard._id}`);
      } catch (err) {
        throw err;
      }
    }
  };

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      isSubmitting={isSubmitting}
      isAble={isAble}
      isEdit={isEdit}
      boardData={boardData}
      setFormValue={setFormValue}
      images={images}
      onChangeImages={onChangeImages}
    />
  );
}

export default BoardWrite