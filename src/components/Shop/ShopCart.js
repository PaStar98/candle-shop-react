import { FaShoppingCart } from 'react-icons/fa';

import { StyledCart } from '../styled/styled-shop/Shop.styled';
import { StyledCard } from '../styled/styled-layout/Card.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';

export default function ShopCart() {
  return (
    <StyledCard minHeight={'600px'}>
      <StyledCart>
        <header className={'cart-flex'}>
          <FaShoppingCart size={30} color={'#ff5d5d'} />
          <StyledButton>Anuluj</StyledButton>
        </header>
        <div>
          <ul>
            <li>test</li>
            <li>another test</li>
          </ul>
        </div>
        <footer className={'cart-flex'}>
          <h5>
            Suma: <span>1337 zł</span>
          </h5>
          <StyledButton>Zapłać</StyledButton>
        </footer>
      </StyledCart>
    </StyledCard>
  );
}
