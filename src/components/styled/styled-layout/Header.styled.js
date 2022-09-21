import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 15px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  z-index: 1000;
  transition: background-color 100ms ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    padding: 5px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.65);
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledNavElements = styled.ul`
  display: flex;
  gap: 15px;
  list-style-type: none;

  & a {
    color: white;
    text-decoration: none;
    font-size: 19px;
    transition: color 100ms ease-in;
  }

  & a:hover {
    color: #ff5d5d;
  }
`;

export const StyledLogo = styled.h1`
  font-size: 32px;
  cursor: default;

  & span {
    color: #ff5d5d;
  }
`;

export const StyledSocials = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 7px;
  }

  .social {
    transition: opacity 50ms linear;
  }

  .social:hover {
    opacity: 1;
  }
`;
