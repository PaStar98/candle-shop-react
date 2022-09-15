import { useParams } from 'react-router-dom';

import { candlesData } from '../../content/products-content';
import { StyledProducts } from '../styled/styled-shop/Shop.styled';
import { ShopProductItem } from './ShopProductItem';

export const ShopProducts = () => {
  const { categoryID } = useParams();
  console.log(categoryID);

  return (
    <StyledProducts>
      {candlesData.map((el) => (
        <ShopProductItem key={el.id} data={el} />
      ))}
    </StyledProducts>
  );
};
