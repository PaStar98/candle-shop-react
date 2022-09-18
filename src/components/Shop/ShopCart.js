import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

import { ShopCartItem } from './ShopCartItem';
import { StyledCart } from '../styled/styled-shop/Shop.styled';
import { StyledCard } from '../styled/styled-layout/Card.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';

export const ShopCart = () => {
  const cartItems = useSelector((state) => state.shop.items);
  const totalAmount = useSelector((state) => state.shop.totalAmount);

  return (
    <StyledCard minHeight={'600px'}>
      <StyledCart>
        <header className={'cart-flex'}>
          <FaShoppingCart size={30} color={'#ff5d5d'} />
          <StyledButton>Anuluj</StyledButton>
        </header>
        <div className={'products-container'}>
          <ul>
            {cartItems.map((el) => (
              <ShopCartItem
                key={el.id}
                id={el.id}
                name={el.name}
                price={el.price}
                totalPrice={el.totalPrice}
                quantity={el.quantity}
                img={el.img}
              />
            ))}
          </ul>
        </div>
        <footer className={'cart-flex'}>
          <h5>
            Suma: <span>{totalAmount.toFixed(2)}</span>
          </h5>
          <StyledButton>Zapłać</StyledButton>
        </footer>
      </StyledCart>
    </StyledCard>
  );
};
