import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 15px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  z-index: 1000;
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
`;

export const StyledLogo = styled.h1`
  font-size: 32px;

  & span {
    color: #ff5d5d;
  }
`;

export const StyledSocials = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
`;

export const StyledSlider = styled.div``;
