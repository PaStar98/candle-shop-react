import { useDispatch } from 'react-redux';
import { cartProductAdd } from '../../store/shop-slice';

import { StyledProductItem } from '../styled/styled-shop/Shop.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';
import { StyledCard } from '../styled/styled-layout/Card.styled';

export const ShopProductItem = ({ data }) => {
  const { id, name, price, img } = data;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartProductAdd({ id, name, price, img }));
  };
  return (
    <StyledCard>
      <StyledProductItem>
        <figure>
          <img src={img} alt="" />
          <figcaption>{name}</figcaption>
        </figure>
        <div className={'price'}>
          <p>
            Cena: <b>{price.toFixed(2).toString().replace('.', ',')} zł</b>
          </p>
          <StyledButton onClick={addItemHandler}>+</StyledButton>
        </div>
      </StyledProductItem>
    </StyledCard>
  );
};
