import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #fefefe;
  border-radius: 15px;
  box-shadow: 3px 3px 15px #696969;
  padding: 15px;
  min-height: ${({ minHeight }) => minHeight || 'default'};
`;
