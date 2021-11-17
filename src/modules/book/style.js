import { BrownButton } from 'modules/shared/style';
import styled from 'styled-components';

export const Container = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/assets/images/background.jpg');
`;

export const BookContainer = styled.section`
  width: 100%;
  height: 90%;
  padding: 5% 15%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.section`
  background: ${(props) => `url(${props.background}) no-repeat`};
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  img {
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;

export const RightContainer = styled.section`
  background-color: #ffffffcf;
  width: 30%;
  height: 100%;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  .details-wrapper {
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .button-group {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 12px;

    button {
      &.edit-button {
        box-shadow: none;
        background: none;
      }

      &.delete-button {
        background: hsl(0, 83%, 65%);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background: hsl(0, 83%, 70%);
        }
      }
    }
  }

  button {
    height: 30px;
    cursor: pointer;
    border: none;
    font-size: 16px;

    @media screen and (max-width: 720px) {
      height: 24px;
    }

    &.back-button {
      box-shadow: none;
      background: none;
      width: 24px;
      @media screen and (max-width: 720px) {
        margin-bottom: 12px;
      }
    }

    &.save-button {
      margin-top: 8px;
      background: hsl(136, 41%, 64%);
      color: white;
      width: 30%;
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      @media screen and (max-width: 720px) {
        margin-bottom: 12px;
        width: 100%;
      }

      &:hover {
        background: hsl(136, 41%, 70%);
      }
    }

    &.rent-button {
      background: #3480eb;
      color: white;

      &.rented {
        background: hsl(0, 83%, 65%);
      }
    }
  }
`;

export const BtnNewBook = styled(BrownButton)`
  width: 215px;
  align-self: flex-end;
`;

export const CreateContainer = styled.main`
  background-color: #faf0e1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .left-create {
    width: 35vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .left-create > h1 {
    font-size: 3vw;
    color: #472b01;
  }

  .left-login-image {
    width: 35vw;
  }

  .right-create {
    width: 65vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-create {
    width: 60%;
    height: 70%;
    display: flex;
    justify-content: space-baseline;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background-color: #f2e1c7;
    border-radius: 20px;
    box-shadow: 0px 10px 20px #ebdcc5;
  }

  .card-create > h1 {
    color: #472b01;
    font-weight: 800;
    margin: 0;
    font-size: 2vw;
  }

  .input--create,
  .descricao {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
  }

  .input--create > input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 25px;
    background-color: #dec9a9;
    font-size: 12pt;
    box-shadow: 0px 10px 25px #ebdcc5;
    outline: none;
    box-sizing: border-box;
  }

  .input--create > input::placeholder {
    color: #3c3440;
  }

  .input--create > label {
    color: #472b01;
    margin-bottom: 10px;
  }

  .descricao {
    font-size: 20px;
    background-color: #dec9a9;
    border: none;
    border-radius: 10px;
    padding: 25px;
  }
`;

export const BtnCreate = styled(BrownButton)``;
