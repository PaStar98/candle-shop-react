import { useDispatch } from 'react-redux';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaShoppingCart,
} from 'react-icons/fa';

import { categoriesContent } from '../../content/categories-content';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import { setCurrentCategory, enableCartModal } from '../../store/shop-slice';

import {
  StyledHeader,
  StyledNav,
  StyledNavElements,
  StyledLogo,
  StyledSocials,
} from '../styled/styled-layout/Header.styled';

export const Header = () => {
  const dispatch = useDispatch();

  /* SET FIRST CATEGORY ACTIVE AFTER USER'S NAV SHOP CLICK */
  const setFirstCategoryActive = () => {
    const firstCategoryID = categoriesContent[0].id;
    dispatch(setCurrentCategory(firstCategoryID));
  };

  const openCartModalHandler = () => {
    dispatch(enableCartModal());
  };

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
            <Link to={'/#home'}>Home</Link>
          </li>
          <li>
            <Link to={`/shop/candles#shop`} onClick={setFirstCategoryActive}>
              Sklep
            </Link>
          </li>
          <li>
            <NavLink to={'/info'}>Informacje</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>O nas</NavLink>
          </li>
          <li>
            <Link to={'#contact'}>Kontakt</Link>
          </li>
        </StyledNavElements>

        <StyledSocials>
          <span>
            <FaInstagramSquare
              className="social"
              color="#ff5d5d"
              size="25"
              cursor="pointer"
              opacity="0.85"
            />
          </span>
          <span>
            <FaFacebookSquare
              className="social"
              color="#ff5d5d"
              size="25"
              cursor="pointer"
              opacity="0.85"
            />
          </span>
          <span>
            <FaShoppingCart
              className="social"
              color="#ff5d5d"
              size="25"
              cursor="pointer"
              opacity="0.85"
              onClick={openCartModalHandler}
            />
          </span>
        </StyledSocials>
      </StyledNav>
    </StyledHeader>
  );
};

/* todo: make list item in StyledSocials instead of span */
