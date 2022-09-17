import { StyledProductItem } from '../styled/styled-shop/Shop.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';
import { StyledCard } from '../styled/styled-layout/Card.styled';

export const ShopProductItem = ({ data }) => {
  const { name, price, img } = data;

  return (
    <StyledCard>
      <StyledProductItem>
        <figure>
          <img src={img} alt="" />
          <figcaption>{name}</figcaption>
        </figure>
        <div className={'price'}>
          <p>
            Cena: <b>{price} zł</b>
          </p>
          <StyledButton>+</StyledButton>
        </div>
      </StyledProductItem>
    </StyledCard>
  );
};
