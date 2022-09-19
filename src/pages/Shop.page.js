import { Route } from 'react-router-dom';

import { bannerContent } from '../content/banner-content';
import { categoriesContent } from '../content/categories-content';
import { StyledShop } from '../components/styled/styled-shop/Shop.styled';
import { ShopBanner } from '../components/Shop/ShopBanner';
import { ShopCart, ShopCartModal } from '../components/Shop/ShopCart';
import { ShopCategories } from '../components/Shop/ShopCategories';
import { ShopProducts } from '../components/Shop/ShopProducts';

export const ShopPage = () => {
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
        <ShopCartModal />
      </div>
    </StyledShop>
  );
};
