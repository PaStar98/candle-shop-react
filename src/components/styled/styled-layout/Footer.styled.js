import styled from 'styled-components';

export const StyledFooter = styled.footer`
  & .contact-container {
    display: flex;
    gap: 50px;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 25px 75px 0;
  }

  & .copyright {
    background-color: #222;
    opacity: 0.9;
    margin-top: 150px;
    color: white;
    letter-spacing: 1px;
    padding: 5px;

    span {
      color: #ff5d5d;
    }

    h5 {
      font-size: 14px;
      text-align: center;
      font-weight: normal;
    }
  }

  @media (max-width: 768px) {
    & .contact-container {
      flex-flow: column nowrap;
      padding: 25px 25px 0;
    }

    & .copyright {
      margin-top: 75px;
      letter-spacing: normal;
    }
  }
`;
