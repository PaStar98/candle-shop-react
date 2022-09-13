import { StyledCategories } from '../styled/styled-shop/Shop.styled';
import { ShopCategoryItem } from './ShopCategoryItem';

export const ShopCategories = ({ categoriesList }) => {
  return (
    <StyledCategories>
      <b>Kategorie: </b>
      <div className={'container-categories'}>
        {categoriesList.map((el) => (
          <ShopCategoryItem key={el.id} category={el.category} img={el.img} />
        ))}
      </div>
    </StyledCategories>
  );
};

/* todo: set active class for last category item was clicked, amen */
