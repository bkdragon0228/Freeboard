import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Best = styled.div`
  margin-top: 80px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  margin-bottom: 80px;
`;
export const Title = styled.div`
  font-size: 36px;
  line-height: 42.19px;
  text-align: center;
  font-weight: 700;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 1200px;
  display: flex;
  column-gap: 42px;
  margin-bottom: 40px;
`;

export const SearchInput = styled.input`
  width: 776px;
  height: 52px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding-left: 48px;
`;

export const searchIcon = styled.svg`
  position: absolute;
  left: 19px;
  top: 50%;
  transform: translateY(-50%);
`;

export const PeriodInput = styled.input`
  width: 244px;
  height: 52px;
  padding: 14px 16px;
`;

export const Button = styled.button`
  width: 94px;
  height: 52px;
  text-align: center;
  background-color: #000000;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  width: 1200px;
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
  &:hover {
    text-decoration: underline;
  }
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
