import { FaMinus, FaPlus } from 'react-icons/fa';

import { StyledCartItem } from '../styled/styled-shop/Shop.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';

export const ShopCartItem = ({ name, price, img }) => {
  return (
    <StyledCartItem>
      <div className={'image-container'}>
        <img src={img} alt="Przedmiot w koszyku" />
      </div>

      <div className={'product-data'}>
        <span>{name}</span>
        <div className={'product-quantity-chooser'}>
          <FaMinus color={'#ee4c4c'} cursor={'pointer'} size={15} />
          <span>0</span>
          <FaPlus color={'#ee4c4c'} cursor={'pointer'} size={15} />
        </div>
      </div>

      <span className={'product-price'}>{price} zł</span>
    </StyledCartItem>
  );
};
