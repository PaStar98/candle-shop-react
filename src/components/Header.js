import { NavLink } from 'react-router-dom';

import {
  StyledHeader,
  StyledNav,
  StyledNavElements,
  StyledLogo,
  StyledSocials,
} from './styled/styled-layout/Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <div>
          <StyledLogo>
            <span>S</span>candles
          </StyledLogo>
        </div>

        <StyledNavElements>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/shop'}>Sklep</NavLink>
          </li>
          <li>
            <NavLink to={'/info'}>Informacje</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>O nas</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Kontakt</NavLink>
          </li>
        </StyledNavElements>

        <StyledSocials>
          <span>IG</span>
          <span>FB</span>
          <span>Cart</span>
        </StyledSocials>
      </StyledNav>
    </StyledHeader>
  );
}
