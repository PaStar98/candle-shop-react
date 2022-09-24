import styled from 'styled-components';

export const StyledShop = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 25px;
  padding: 25px;
  min-height: 600px;

  & .products-side {
    flex: 5;
  }

  & .cart-side {
    flex: 3;
    @media (max-width: 900px) {
      & {
        display: none;
      }
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
  min-height: 210px;

  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  background-image: url('https://image.shutterstock.com/image-photo/burning-golden-candles-on-black-260nw-1547240795.jpg');

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
  justify-content: space-between;
  height: 600px;

  & .products-container {
    overflow: auto;
    height: 100%;
    justify-self: flex-start;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

    /* width */
    ::-webkit-scrollbar {
      width: 11px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #aaa;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #ff5d5d;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #ee4c4c;
    }

    ul {
      list-style-type: none;
    }
  }

  & header {
    margin-bottom: 25px;
  }

  & footer {
    margin-top: 15px;

    & h5 {
      font-size: 20px;

      & span {
        font-size: 18px;
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
    font-size: 16px;
    padding: 5px 10px;
    letter-spacing: normal;
  }
`;

export const StyledCartModal = styled.div`
  z-index: 200;
  animation: ${(props) => (props.openAnimation ? 'fadein 350ms ease-in' : '')};
  animation: ${(props) => (props.animation ? 'fadeout 350ms ease-out' : '')};

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }

  @media (min-width: 900px) {
    display: none;
  }

  .cart-modal {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    background-color: white;
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
    min-height: 250px;
  }

  & .cart-flex {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  & .products-container {
    overflow: auto;
    height: 60vh;
    justify-self: flex-start;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

    /* width */
    ::-webkit-scrollbar {
      width: 11px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #aaa;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #ff5d5d;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #ee4c4c;
    }

    ul {
      list-style-type: none;
    }
  }

  & header {
    margin-bottom: 15px;
  }

  & footer {
    margin-top: 15px;

    & h5 {
      font-size: 20px;

      & span {
        font-size: 16px;
        font-weight: normal;
      }
    }
  }

  & button {
    font-size: 14px;
    padding: 5px 10px;
    letter-spacing: normal;
  }
`;

export const StyledCartItem = styled.li`
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid #aaa;
  padding: 25px 0;

  .image-container {
    flex: 1;

    img {
      width: 100%;
      height: auto;
    }
  }

  .product-data {
    flex: 3;
    display: flex;
    flex-flow: column nowrap;
    font-size: 15px;
  }

  .product-quantity-chooser {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;

    span {
      padding: 0 10px;
      outline: 1px solid #aaa;
      box-shadow: inset 0 0 2px #aaa;
      border-radius: 5px;
    }
  }

  .product-price {
    flex: 1;
    font-size: 15px;
    font-weight: bold;
    margin: 0 5px 0 15px;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const StyledCategories = styled.div`
  margin-top: 25px;
  text-align: center;

  & .container-categories {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(75px, 100px));
    justify-content: center;
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
      width: 45%;
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

  & div:hover,
  .active {
    color: white;
    background-color: #ff3c3c;

    & svg {
      color: white !important;
    }
  }
`;

export const StyledProducts = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  margin-top: 35px;
`;

export const StyledProductItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  text-align: center;
  height: 100%;

  & figure {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  & .price {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    button {
      border-radius: 50%;
      padding: 5px 10px;
      font-size: 15px;
    }
  }
`;
