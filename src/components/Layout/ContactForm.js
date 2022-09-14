import { StyledButton } from '../styled/styled-layout/Button.styled';
import { StyledFormContainer } from '../styled/styled-layout/Contact.styled';

export const ContactForm = () => {
  return (
    <StyledFormContainer>
      <h5>Odezwij się do nas!</h5>
      <form>
        <input
          type="text"
          placeholder={'Imię'}
          name={'user-name'}
          required
          aria-required={true}
          minLength={3}
        />
        <input
          type="email"
          placeholder={'Email'}
          name={'user-email'}
          required
          aria-required={true}
        />
        <textarea
          name="message"
          placeholder={'Wpisz treść wiadomości'}
          required
          aria-required={true}
          minLength={3}
        ></textarea>
        <StyledButton>Wyślij</StyledButton>
      </form>
    </StyledFormContainer>
  );
};
