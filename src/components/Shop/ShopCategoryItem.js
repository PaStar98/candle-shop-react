import { useDispatch, useSelector } from 'react-redux';
import { FaArrowCircleDown } from 'react-icons/fa';

import { getID } from '../../store/shop-slice';
import { StyledCard } from '../styled/styled-layout/Card.styled';
import { StyledCategoryItem } from '../styled/styled-shop/Shop.styled';

export const ShopCategoryItem = ({ id, category, img }) => {
  const dispatch = useDispatch();
  const clickedElementID = useSelector((state) => state.shop.whichID);

  const activeClassHandler = () => {
    dispatch(getID(id));
  };

  return (
    <StyledCategoryItem onClick={activeClassHandler}>
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
