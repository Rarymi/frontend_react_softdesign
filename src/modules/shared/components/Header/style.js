import { BrownButton } from 'modules/shared/style';
import styled from 'styled-components';

export const TheHeader = styled.header`
  width: 100vw;
  height: 80px;
  background: #d1c0a7;
  display: flex;
  justify-content: space-space-between;

  @media screen and (max-width: 720px) {
    height: 60px;
  }

  @media screen and (max-width: 360px) {
    height: 50px;
  }

  .container {
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-space-between;
    height: 100%;
    margin-left: -5px;
    width: 100%;
    justify-content: flex-end;
  }

  .logo {
    flex: 1;

    img {
      width: 170px;
    }
  }
`;
export const BtnLogout = styled(BrownButton)``;
