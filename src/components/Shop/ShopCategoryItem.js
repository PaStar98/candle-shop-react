import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowCircleDown } from 'react-icons/fa';

import { categoriesContent } from '../../content/categories-content';
import { setCurrentCategory } from '../../store/shop-slice';
import { StyledCard } from '../styled/styled-layout/Card.styled';
import { StyledCategoryItem } from '../styled/styled-shop/Shop.styled';

export const ShopCategoryItem = ({ data }) => {
  const { id, route, category, img } = data;
  const history = useHistory();

  const dispatch = useDispatch();
  const clickedElementID = useSelector((state) => state.shop.currentCategoryID);

  /* SET FIRST CATEGORY AS ACTIVE */
  useEffect(() => {
    const firstCategory = categoriesContent[0].id;
    dispatch(setCurrentCategory(firstCategory));
  }, [dispatch]);

  /* SETTING ACTIVE CLASS, CHANGE ROUTE */
  const clickHandler = () => {
    dispatch(setCurrentCategory(id));
    history.push(`/shop${route}`);
  };

  return (
    <StyledCategoryItem onClick={clickHandler}>
      <StyledCard className={`${id === clickedElementID ? 'active' : null}`}>
        <div className="img-container">
          <img src={img} alt="temp" />
        </div>
        <h3>{category}</h3>
        <FaArrowCircleDown color={'#ff3c3c'} size={18} />
      </StyledCard>
    </StyledCategoryItem>
  );
};
