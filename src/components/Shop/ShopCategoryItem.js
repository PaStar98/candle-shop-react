import { FaArrowCircleDown } from 'react-icons/fa';

import { StyledCard } from '../styled/styled-layout/Card.styled';
import { StyledCategoryItem } from '../styled/styled-shop/Shop.styled';
import { StyledButton } from '../styled/styled-layout/Button.styled';

export const ShopCategoryItem = ({ category, img }) => {
  return (
    <StyledCategoryItem>
      <StyledCard className={'.card'}>
        <div className="img-container">
          <img src={img} alt="temp" />
        </div>
        <h3>{category}</h3>
        <FaArrowCircleDown color={'#ff3c3c'} size={25} />
      </StyledCard>
    </StyledCategoryItem>
  );
};
