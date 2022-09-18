import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin-top: 100px;
  min-height: 600px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://images3.alphacoders.com/199/199305.jpg');

  & .contact-container {
    display: flex;
    gap: 50px;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 75px 75px 0;
    opacity: 0.9;

    @media (max-width: 768px) {
      margin: 75px 5px 0;
    }
  }

  & .copyright {
    background-color: #222;
    opacity: 0.9;
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
