import { MdLocationPin, MdSmartphone, MdEmail } from 'react-icons/md';

import { StyledFind } from '../styled/styled-layout/Contact.styled';

export const ContactFind = () => {
  return (
    <StyledFind>
      <h5>Znajdź Nas!</h5>
      <span>
        <MdLocationPin size={28} color={'#ff5d5d'} />
        Warszawa, 01-235
      </span>

      <span>
        <MdSmartphone size={28} color={'#ff5d5d'} />
        692 137 666
      </span>

      <span>
        <MdEmail size={28} color={'#ff5d5d'} />
        SCandle.contact@gmail.com
      </span>
    </StyledFind>
  );
};
