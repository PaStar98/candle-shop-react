import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { disablePopup } from '../../store/ui-slice';
import { MdOutlineWarning } from 'react-icons/md';
import styled from 'styled-components';

const StyledErrorPopup = styled.div`
  position: fixed;
  display: ${(props) => (props.isErr ? 'flex' : 'none')};
  gap: 20px;
  align-items: center;
  bottom: 50px;
  left: 50px;
  background-color: #efefef;
  border: 1px solid #666;
  border-radius: 10px;
  padding: 25px;
  z-index: 100;
  opacity: 0;

  @media (max-width: 768px) {
    & {
      bottom: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
    }
  }

  p {
    font-size: 18px;
  }
`;

export const ErrorPopup = ({ msg }) => {
  const dispatch = useDispatch();
  const errorPopup = useSelector((state) => state.ui.errorPopup);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(disablePopup());
    }, 5650);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, errorPopup]);

  return (
    <Fragment>
      <StyledErrorPopup
        className={errorPopup ? 'animation-fadeinout' : ''}
        isErr={errorPopup}
      >
        <MdOutlineWarning size={35} color="orange" />
        <p>{msg}</p>
      </StyledErrorPopup>
    </Fragment>
  );
};

// todo: display none if StyledErrPopup has not active animation-fadeinout class
