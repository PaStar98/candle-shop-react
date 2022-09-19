import { useDispatch, useSelector } from 'react-redux';
import { disableCartModal } from '../store/shop-slice';
import { Route } from 'react-router-dom';

import { bannerContent } from '../content/banner-content';
import { categoriesContent } from '../content/categories-content';
import { StyledShop } from '../components/styled/styled-shop/Shop.styled';
import { ShopBanner } from '../components/Shop/ShopBanner';
import { ShopCart, ShopCartModal } from '../components/Shop/ShopCart';
import { ShopCategories } from '../components/Shop/ShopCategories';
import { ShopProducts } from '../components/Shop/ShopProducts';

export const ShopPage = () => {
  const dispatch = useDispatch();
  const isCartModal = useSelector((state) => state.shop.isCartModal);

  const closeCartModalHandler = () => {
    dispatch(disableCartModal());
  };

  return (
    <StyledShop id="shop">
      <div className={'products-side'}>
        <ShopBanner banner={bannerContent} />
        <ShopCategories categoriesList={categoriesContent} />
        <Route exact path={'/shop/:categoryID'}>
          <ShopProducts />
        </Route>
      </div>
      <div className={'cart-side'}>
        <ShopCart />
      </div>
      {isCartModal && <ShopCartModal closeModal={closeCartModalHandler} />}
    </StyledShop>
  );
};
