import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

import { ShopCartItem } from './ShopCartItem';
import { StyledCart } from '../styled/styled-shop/Shop.styled';
import { StyledCard } from '../styled/styled-layout/Card.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';

export const ShopCart = () => {
  const cartList = useSelector((state) => state.shop.items);

  return (
    <StyledCard minHeight={'600px'}>
      <StyledCart>
        <header className={'cart-flex'}>
          <FaShoppingCart size={30} color={'#ff5d5d'} />
          <StyledButton>Anuluj</StyledButton>
        </header>
        <div className={'products-container'}>
          <ul>
            {cartList.map((el) => (
              <ShopCartItem
                key={el.id}
                name={el.name}
                price={el.price}
                img={el.img}
              />
            ))}
          </ul>
        </div>
        <footer className={'cart-flex'}>
          <h5>
            Suma: <span>2137</span>
          </h5>
          <StyledButton>Zapłać</StyledButton>
        </footer>
      </StyledCart>
    </StyledCard>
  );
};
