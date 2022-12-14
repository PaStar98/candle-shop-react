import { StyledCategories } from '../styled/styled-shop/Shop.styled';
import { ShopCategoryItem } from './ShopCategoryItem';

export const ShopCategories = ({ categoriesList }) => {
  return (
    <StyledCategories>
      <b>Kategorie: </b>
      <div className={'container-categories'}>
        {categoriesList.map((el) => (
          <ShopCategoryItem key={el.id} data={el} />
        ))}
      </div>
    </StyledCategories>
  );
};
