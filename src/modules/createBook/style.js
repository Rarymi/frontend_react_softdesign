import styled from 'styled-components';

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
