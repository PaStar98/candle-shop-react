import { StyledButton } from '../styled/styled-layout/Button.styled';
import { StyledBanner } from '../styled/styled-shop/Shop.styled';

export default function ShopBanner(props) {
  const { title, description, price } = props.banner;

  return (
    <StyledBanner>
      <h5>{title}</h5>
      <p>
        {description} <span>{price}</span>
      </p>
      <StyledButton>Zobacz</StyledButton>
    </StyledBanner>
  );
}
