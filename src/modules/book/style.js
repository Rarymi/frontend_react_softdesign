import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
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
`;

export const LeftContainer = styled.section`
  background: ${(props) => `url(${props.background}) no-repeat`};
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;

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

  .details-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  button {
    height: 30px;
    cursor: pointer;
    border-radius: 99999px;
    border: 1px solid black;
    font-size: 16px;
  }
`;
