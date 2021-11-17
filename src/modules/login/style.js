import { BrownButton } from 'modules/shared/style';
import styled from 'styled-components';

export const Container = styled.main`
  background-color: #faf0e1;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .left-login {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .left-login > h1 {
    font-size: 3vw;
    color: #472b01;
  }

  .left-login-image {
    width: 35vw;
  }

  .right-login {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }

  .card-login {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background-color: #f2e1c7;
    border-radius: 20px;
    box-shadow: 0px 10px 20px #ebdcc5;

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }

  .card-login > h1 {
    color: #472b01;
    font-weight: 800;
    margin: 0;
    font-size: 1.2rem;
  }

  .form--input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
  }

  .form--input > input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background-color: #dec9a9;
    font-size: 12pt;
    box-shadow: 0px 10px 25px #ebdcc5;
    outline: none;
    box-sizing: border-box;
  }

  .form--input > input::placeholder {
    color: #3c3440;
  }

  .form--input > label {
    color: #472b01;
    margin-bottom: 10px;
  }
`;

export const LoginButton = styled(BrownButton)`
  width: 100%;
`;
