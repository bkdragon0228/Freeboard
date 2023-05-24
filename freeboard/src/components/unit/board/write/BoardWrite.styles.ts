import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  min-height: 1847px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  padding: 60px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    text-align: center;
    min-width: 174px;
    height: 53px;
    font-size: 36px;
    font-weight: 700;
  }
`;

export const Section1 = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 40px;

  & input {
    box-sizing: border-box;
    width: 486px;
    height: 52px;
    padding: 14px 16px;
  }

  & .writer p {
    font-weight: 500;
    line-height: 23.68px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled(Writer)``;

export const Subject = styled(Writer)`
  width: 100%;
`;

export const Content = styled.input`
  position: relative;
  width: 100%;
  height: 480px;
  padding-left: 14px;
  padding: 16px;
  border: 1px solid #bdbdbd;
  &::-webkit-input-placeholder {
    position: absolute;
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 53px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchBtn = styled.button`
  width: 124px;
  height: 53px;
  margin-left: 16px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Address = styled(Subject)`
  margin-top: 16px;
`;

export const LinkUrl = styled(Subject)``;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadBtn = styled.button`
  width: 78px;
  height: 78px;
  text-align: center;
  background-color: #bdbdbd;
  margin-right: 24px;
  border: none;
  cursor: pointer;
`;

export const RadionBtn = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin: 0 20px 0 8px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<{isAble : boolean}>`
  width: 179px;
  height: 52px;
  padding: 14px 60px;
  background-color: ${(props) => (props.isAble ? "#ffd600" : "gray")};
  border: none;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Error = styled.div`
  width: 100%;
  font-size: 16px;
  color: red;
`;
