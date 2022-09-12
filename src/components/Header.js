import {
  StyledHeader,
  StyledNav,
  StyledNavElements,
  StyledLogo,
  StyledSocials,
} from './styled/Header.styled';

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
          <li>Home</li>
          <li>Sklep</li>
          <li>Informacje</li>
          <li>O nas</li>
          <li>Kontakt</li>
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
