import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #ff5d5d;
  color: white;
  text-shadow: 1px 1px 2px #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.85;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: opacity 150ms linear, background-color 150ms linear;

  &:hover {
    opacity: 1;
    background-color: #ff3c3c;
  }
`;
