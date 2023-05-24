import styled from "@emotion/styled";
import { EnvironmentOutlined } from '@ant-design/icons'

export const DetailContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const ContentsWrapper = styled.main`
  width: 1200px;
  min-height: 1562px;
  padding: 87px 107px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const UserInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  column-gap: 16px;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 35.52px;
  color: black;
`;

export const CreateDate = styled.div`
  font-size: 13px;
  color: gray;
`;

export const UserButtonContainer = styled.div`
  position: absolute;
  right: 5px;
  display: flex;
  column-gap: 30px;
`;

export const UserButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const MainContents = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 53.28px;
`;

export const MainImage = styled.div`
  width: 996px;
  height: 480px;
  background-color: #f2f2f2;
`;

export const Contents = styled.div`
  font-weight: 400;
  line-height: 23.68px;
`;

export const SideContents = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoContainer = styled.div`
  width: 486px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const StatusContainer = styled.div`
  margin-top: 122px;
  display: grid;
  grid-template-columns: 58px 58px;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffd600;
  cursor: pointer;
`;

export const DisLike = styled(Like)`
  color: #828282;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 24px;
  padding-bottom: 87px;
  border-bottom: 1px solid #bdbdbd;
`;

export const MenuButton = styled.button`
  width: 179px;
  padding: 14px 60px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  &:hover {
    background-color: gold;
    border-color: white;
  }
`;


export const AddressModal = styled.div`
  position: absolute;
  top: -120px;
  right: 20px;
  min-width: 200px;
  height: 100px;
  padding: 1rem;
  color : white;
  background-color: black;
  transition : all .3s ease;

  &::after {
    content: "";
    width: 0px;
    height: 0px;
    border-top: 10px solid black;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    position: absolute;
    right: 0;
    bottom: -10px;
  }
`

export const AddressIcon = styled(EnvironmentOutlined)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: #FFD600;
`
