import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);

  .search {
    width: 70%;
    align-self: center;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 90%;

  padding: 16px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: unset;
    flex-wrap: unset;
  }
`;

export const ListItem = styled.div`
  width: 15%;
  height: 50%;
  border: 1px solid black;
  padding: 8px;
  background: ${(props) => `url(${props.background}) no-repeat`};
  background-size: cover;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 300px;
  }

  .book-description-container {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;

    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
  }
`;
