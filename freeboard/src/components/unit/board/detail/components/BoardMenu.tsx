import React from 'react';
import { BoardMenuProps } from '../BoardDetail.type'

import useMove from '../../../../../hook/useMove'

import * as S from '../BoardDetail.styles'

const BoardMenu : React.FC<BoardMenuProps>= ({
    handleDelete,
}) => {
    const { router, moveToPath } = useMove()
    return (
        <S.MenuContainer>
            <S.MenuButton onClick={() => moveToPath('/boards')}>목록으로</S.MenuButton>
            <S.MenuButton onClick={() => moveToPath(`/boards/${router.query.boardId}/edit`)}>수정하기</S.MenuButton>
            <S.MenuButton onClick={handleDelete}>삭제하기</S.MenuButton>
        </S.MenuContainer>
    );
};

export default BoardMenu;