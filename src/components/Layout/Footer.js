import { StyledFooter } from '../styled/styled-layout/Footer.styled';
import { ContactForm } from './ContactForm';
import { ContactFind } from './ContactFind';

export const Footer = () => {
  return (
    <StyledFooter id="contact">
      <div className={'contact-container'}>
        <ContactForm />
        <ContactFind />
      </div>
      <div className={'copyright'}>
        <h5>
          &copy; copyright 2022 by{' '}
          <span className={'author'}>Patryk Startek</span>
        </h5>
      </div>
    </StyledFooter>
  );
};
