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
  gap: 10px;
  padding: 50px;
  color: white;
  text-shadow: 1px 1px 3px #666;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 200ms linear;

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

  &:hover {
    transform: scale(1.05);
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
    letter-spacing: normal;
  }
`;

export const StyledCategories = styled.div`
  margin-top: 25px;

  & .container-categories {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
    margin-top: 10px;
  }
`;

export const StyledCategoryItem = styled.div`
  cursor: pointer;
  text-align: center;

  & .img-container {
    text-align: center;
    height: fit-content;

    & img {
      object-fit: contain;
      width: 60%;
      border-radius: 15px;
    }
  }

  & div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    padding: 5px;
    transition: color 100ms linear, background-color 100ms linear;
    height: 100%;
  }

  & h3 {
    font-size: 16px;
  }

  & div:hover {
    color: white;
    background-color: #ff3c3c;

    & svg {
      color: white !important;
    }
  }
`;

export const StyledProducts = styled.ul``;
