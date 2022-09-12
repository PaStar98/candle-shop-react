import styled from 'styled-components';

export const StyledShop = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 15px;
  padding: 25px;
  min-height: 600px;

  & .products-side,
  .cart-side {
    border: 1px dotted black;
  }

  & .products-side {
    flex: 3;
  }

  & .cart-side {
    flex: 1;
  }

  @media (max-width: 768px) {
    & .cart-side {
      display: none;
    }
  }
`;

export const StyledBanner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  color: white;
  text-shadow: 1px 1px 3px #666;
  border-radius: 15px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('https://img1.goodfon.com/wallpaper/nbig/a/33/window-merry-christmas-xmas-3371.jpg');

  & h5 {
    font-size: 24px;
  }

  & p {
    font-size: 18px;
  }

  & span {
    color: #ff3c3c;
    font-weight: bold;
  }

  & button {
    font-size: 18px;
  }
`;

export const StyledCart = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 600px;
  gap: 25px;

  & footer {
    margin-top: auto;

    & h5 {
      font-size: 20px;

      & span {
        font-size: 16px;
        font-weight: normal;
      }
    }
  }

  & .cart-flex {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  & button {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export const StyledCategories = styled.div`
  margin: 10px 0;

  & .container-categories {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
  }
`;

export const StyledProducts = styled.ul``;
