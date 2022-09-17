import { Route, useParams } from 'react-router-dom';

import {
  candlesData,
  perfumeOilData,
  soapsData,
  carData,
  accessoriesData,
} from '../../content/products-content';
import { StyledProducts } from '../styled/styled-shop/Shop.styled';
import { ShopProductItem } from './ShopProductItem';

export const ShopProducts = () => {
  const { categoryID } = useParams();
  console.log('New Route -> ', categoryID);

  return (
    <StyledProducts>
      {candlesData.map((el) => (
        <Route path={'/shop/candles'} key={el.id}>
          <ShopProductItem data={el} />
        </Route>
      ))}

      {perfumeOilData.map((el) => (
        <Route path={'/shop/perfume-oil'} key={el.id}>
          <ShopProductItem data={el} />
        </Route>
      ))}

      {soapsData.map((el) => (
        <Route path={'/shop/soaps'} key={el.id}>
          <ShopProductItem data={el} />
        </Route>
      ))}

      {carData.map((el) => (
        <Route path={'/shop/car'} key={el.id}>
          <ShopProductItem data={el} />
        </Route>
      ))}

      {accessoriesData.map((el) => (
        <Route path={'/shop/accessories'} key={el.id}>
          <ShopProductItem data={el} />
        </Route>
      ))}
    </StyledProducts>
  );
};

// FIXME: BEWARE, SHITTY CODE ABOVE, PREPARE VOMIT BAG
