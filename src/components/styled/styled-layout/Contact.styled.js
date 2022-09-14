import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  flex: 3;
  text-align: center;

  & h5 {
    font-size: 30px;
    margin-bottom: 15px;
    color: #ff5d5d;
  }

  & form {
    display: flex;
    flex-flow: column;
    gap: 10px;

    & input,
    textarea {
      padding: 5px;
      font-size: 14px;
      border-radius: 5px;
      outline: 1px solid #666;
      border: none;
    }

    & textarea {
      height: 100px;
      resize: none;
    }

    & button {
      font-size: 18px;
      width: 50%;
      padding: 10px 25px;
      margin: 0 auto;

      @media (max-width: 768px) {
        width: fit-content;
      }
    }
  }
`;

export const StyledFind = styled.div`
  flex: 2;
  display: flex;
  flex-flow: column;
  gap: 10px;

  & h5 {
    font-size: 30px;
    text-align: center;
    color: #ff5d5d;
  }

  & span {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 16px;
    margin-left: 50px;
  }

  @media (max-width: 768px) {
    align-items: center;

    & span {
      margin-left: 5px;
    }
  }
`;
