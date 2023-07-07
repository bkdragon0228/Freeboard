import React from 'react';

import * as S from '../List.style'
import ItemCard from '../../../../commons/ItemCard';

interface BestBoardList {
    bestItems : any
}

const BestBoardList : React.FC<BestBoardList> = ({
    bestItems
}) => {

    return (
        <S.Best>
          <h2>베스트 게시글</h2>
          <ItemCard
            bestItems={bestItems?.fetchBoardsOfTheBest}
          />
        </S.Best>
    );
};

export default BestBoardList;