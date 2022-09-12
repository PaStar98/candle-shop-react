import { StyledShop } from '../components/styled/styled-shop/Shop.styled';
import ShopBanner from '../components/Shop/ShopBanner';
import ShopCart from '../components/Shop/ShopCart';
import ShopCategories from '../components/Shop/ShopCategories';

const bannerContent = {
  title: 'Zimowe Świeco-Branie',
  description: 'Uzyskaj zniżkę na każde wydane',
  price: '100 zł',
};

const categoriesContent = [
  {
    id: 'c1',
    category: 'Świece',
  },
  {
    id: 'c1',
    category: 'Świece',
  },
  {
    id: 'c1',
    category: 'Świece',
  },
];

export default function ShopPage() {
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
}
