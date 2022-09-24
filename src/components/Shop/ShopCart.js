import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

import { enablePopup } from '../../store/ui-slice';
import { ShopCartItem } from './ShopCartItem';
import { StyledCart } from '../styled/styled-shop/Shop.styled';
import { StyledCartModal } from '../styled/styled-shop/Shop.styled';
import { StyledCard } from '../styled/styled-layout/Card.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';

export const ShopCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shop.items);
  const totalAmount = useSelector((state) => state.shop.totalAmount);

  const errorPopup = useSelector((state) => state.ui.errorPopup);

  const errPopupHandler = () => {
    // dispatch only if class 'animation-fadeinout' is NOT set (ErrorModule.js) //
    if (!errorPopup) {
      dispatch(enablePopup());
    }
  };

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
            Suma:{' '}
            <span>
              {totalAmount.toFixed(2).toString().replace('.', ',')} zł
            </span>
          </h5>
          <StyledButton onClick={errPopupHandler}>Zapłać</StyledButton>
        </footer>
      </StyledCart>
    </StyledCard>
  );
};

/* Overlay for mobile width */
export const ShopCartModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shop.items);
  const totalAmount = useSelector((state) => state.shop.totalAmount);

  const animation = useSelector((state) => state.ui.animation);
  const errorPopup = useSelector((state) => state.ui.errorPopup);

  const errPopupHandler = () => {
    // dispatch only if class 'animation-fadeinout' is NOT set (ErrorModule.js) //
    if (!errorPopup) {
      dispatch(enablePopup());
    }
  };

  return (
    <StyledCartModal openAnimation disableAnimation={animation}>
      <div className="backdrop" onClick={closeModal} />
      <StyledCard className="cart-modal">
        <header className={'cart-flex'}>
          <FaShoppingCart size={30} color={'#ff5d5d'} />
          <StyledButton onClick={closeModal}>Anuluj</StyledButton>
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
            Suma:{' '}
            <span>
              {totalAmount.toFixed(2).toString().replace('.', ',')} zł
            </span>
          </h5>
          <StyledButton onClick={errPopupHandler}>Zapłać</StyledButton>
        </footer>
      </StyledCard>
    </StyledCartModal>
  );
};
