import { StyledShop } from '../components/styled/styled-shop/Shop.styled';
import { ShopBanner } from '../components/Shop/ShopBanner';
import { ShopCart } from '../components/Shop/ShopCart';
import { ShopCategories } from '../components/Shop/ShopCategories';

const bannerContent = {
  title: 'Zimowe Świeco-Branie',
  description: 'Uzyskaj zniżkę na każde wydane',
  price: '100 zł',
};

const categoriesContent = [
  {
    id: 'c1',
    category: 'Świece',
    img: 'https://www.ikea.com/pl/pl/images/products/jaemlik-blokowa-swieca-zapachowa-wanilia-jasnobezowy__1060487_pe850040_s5.jpg?f=s',
  },
  {
    id: 'c2',
    category: 'Olejki',
    img: 'https://fraiche.pl/wp-content/uploads/2021/09/eteryczny-lawenda-150x150.jpg',
  },
  {
    id: 'c3',
    category: 'Mydełka',
    img: 'https://homeandgiftsireland.ie/wp-content/uploads/2021/01/1410944__10599.1599083861-150x150.jpg',
  },
  {
    id: 'c4',
    category: 'Samochód',
    img: 'https://images.squarespace-cdn.com/content/v1/5cc436ad348cd90996bd7c17/1590249682007-4VNPRDEVTABCWDVAXU51/Dupe+Fragrance+Car+Air+Freshener+Black.jpg?format=2500w',
  },
  {
    id: 'c5',
    category: 'Akcesoria',
    img: 'https://canna-hub.pl/wp-content/uploads/2021/05/Zapalniczka-benzynowa-Zippo-2007130-Shark-bok-150x150.jpg',
  },
];

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
