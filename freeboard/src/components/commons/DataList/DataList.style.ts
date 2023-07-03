import styled from "@emotion/styled";



export const ListWrapper = styled.div`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 40px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Element = styled.div`
  height: 52px;
  display: grid;
  grid-template-columns: 10% 70% 10% 10%;
  border-bottom: 1px solid #bdbdbd;
  place-items: center;
`;

export const ElementTitle = styled.span<{
  isKeyword : boolean
}>`
  cursor: pointer;
  color : ${(props) => props.isKeyword ? 'red' : 'black'};
`;

export const CreateButton = styled.button`
  width: 171px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  font-size: normal;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    border-color: black;
  }
`;
