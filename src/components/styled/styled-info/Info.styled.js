import styled from 'styled-components';

export const StyledInfoPage = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
  padding: 50px 25px 0;
  max-width: 750px;
  margin: 0 auto;
`;

export const StyledInfoArticles = styled.article`
  display: flex;
  flex-flow: column;
  gap: 25px;

  & header {
    text-align: center;
    font-size: 36px;
  }

  & p {
    text-align: justify;
  }
`;
