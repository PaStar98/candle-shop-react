import styled from 'styled-components';

export const StyledAbout = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;
  text-align: center;
  padding: 50px 50px 0;

  & header h5 {
    font-size: 36px;
  }

  & .about-content-container {
    display: flex;
    gap: 25px;
    flex-flow: row nowrap;

    @media (max-width: 768px) {
      flex-flow: column nowrap;
    }

    figure {
      flex: 2;

      img {
        width: 100%;
        height: auto;
        border-radius: 25px;
        box-shadow: 0 0 15px #666;
      }
    }

    .about-content-text {
      flex: 3;
      display: flex;
      flex-flow: column nowrap;
      gap: 15px;
      text-align: justify;

      q {
        font-size: 20px;
        font-style: italic;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
