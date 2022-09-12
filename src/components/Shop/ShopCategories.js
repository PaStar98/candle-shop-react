import { StyledCategories } from '../styled/styled-shop/Shop.styled';
import ShopCategoryItem from './ShopCategoryItem';

export default function ShopCategories({ categoriesList }) {
  return (
    <StyledCategories>
      <b>Kategorie: </b>
      <div className={'container-categories'}>
        {categoriesList.map((el) => (
          <ShopCategoryItem key={el.id} category={el.category} />
        ))}
      </div>
    </StyledCategories>
  );
}
