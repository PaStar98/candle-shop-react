import { bannerContent } from '../content/banner-content';
import { categoriesContent } from '../content/categories-content';
import { StyledShop } from '../components/styled/styled-shop/Shop.styled';
import { ShopBanner } from '../components/Shop/ShopBanner';
import { ShopCart } from '../components/Shop/ShopCart';
import { ShopCategories } from '../components/Shop/ShopCategories';

export const ShopPage = () => {
  return (
    <StyledShop>
      <div className={'products-side'}>
        <ShopBanner banner={bannerContent} />
        <ShopCategories categoriesList={categoriesContent} />
      </div>
      <div className={'cart-side'}>
        <ShopCart />
      </div>
    </StyledShop>
  );
};
