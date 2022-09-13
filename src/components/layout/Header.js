import { NavLink } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaShoppingCart,
} from 'react-icons/fa';

import {
  StyledHeader,
  StyledNav,
  StyledNavElements,
  StyledLogo,
  StyledSocials,
} from '../styled/styled-layout/Header.styled';

export const Header = () => {
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
          <span>
            <FaInstagramSquare />
          </span>
          <span>
            <FaFacebookSquare />
          </span>
          <span>
            <FaShoppingCart />
          </span>
        </StyledSocials>
      </StyledNav>
    </StyledHeader>
  );
};

/* todo: make list item in StyledSocials instead of span */
