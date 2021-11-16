import styled from 'styled-components';

export const BtnLoginIcons = styled.button`
  width: 100%;
  padding: 16px;
  margin: 25px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  .btn-text {
    text-align: start;
    width: 100%;
  }
`;

export const BtnLogin = styled(BtnLoginIcons)`
  background-color: #2b1a00;
  color: bisque;
  display: inline;

  &:hover {
    background-color: #3d2500;
  }
`;

export const BrownButton = styled.button`
  background-color: #2b1a00;
  color: bisque;
  letter-spacing: 4px;
  text-transform: uppercase;
  border: none;
  height: 30px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const BtnLogout = styled(BrownButton)``;
export const BtnNewBook = styled(BrownButton)`
  width: 215px;
  align-self: flex-end;
`;

export const BtnCreate = styled(BtnLoginIcons)`
  background-color: #2b1a00;
  color: bisque;
  display: inline;

  &:hover {
    background-color: #3d2500;
  }
`;
