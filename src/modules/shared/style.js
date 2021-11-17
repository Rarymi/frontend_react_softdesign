import styled from 'styled-components';

export const Button = styled.button`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const BrownButton = styled(Button)`
  background-color: #2b1a00;
  color: bisque;
  letter-spacing: 4px;
  text-transform: uppercase;
  border: none;
  height: 30px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
