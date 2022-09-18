import { useDispatch } from 'react-redux';
import { cartProductAdd, cartProductRemove } from '../../store/shop-slice';

import { FaMinus, FaPlus } from 'react-icons/fa';

import { StyledCartItem } from '../styled/styled-shop/Shop.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';

export const ShopCartItem = ({
  id,
  name,
  price,
  totalPrice,
  quantity,
  img,
}) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartProductAdd({ id, name, price, img }));
  };

  const removeItemHandler = () => {
    dispatch(cartProductRemove(id));
  };

  return (
    <StyledCartItem>
      <div className={'image-container'}>
        <img src={img} alt="Przedmiot w koszyku" />
      </div>

      <div className={'product-data'}>
        <span>{name}</span>
        <div className={'product-quantity-chooser'}>
          <FaMinus
            color={'#ee4c4c'}
            cursor={'pointer'}
            size={15}
            onClick={removeItemHandler}
          />
          <span>{quantity}</span>
          <FaPlus
            color={'#ee4c4c'}
            cursor={'pointer'}
            size={15}
            onClick={addItemHandler}
          />
        </div>
      </div>

      <span className={'product-price'}>{totalPrice.toFixed(2)} zł</span>
    </StyledCartItem>
  );
};
