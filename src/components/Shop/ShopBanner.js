import { StyledBanner } from '../styled/styled-shop/Shop.styled';

export const ShopBanner = (props) => {
  const { title, description, price } = props.banner;

  return (
    <StyledBanner>
      <h5>{title}</h5>
      <p>
        {description} <span>{price}</span>
      </p>
    </StyledBanner>
  );
};
