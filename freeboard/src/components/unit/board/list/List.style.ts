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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;
  margin-bottom: 80px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 1200px;
  display: flex;
  column-gap: 42px;
  margin-bottom: 40px;
`;

export const ListWrpper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

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
