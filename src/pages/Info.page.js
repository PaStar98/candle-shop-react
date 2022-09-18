import { informationContent } from '../content/information-content';
import { StyledInfoPage } from '../components/styled/styled-info/Info.styled';
import { Info } from '../components/Info/Info';

export const InfoPage = () => {
  return (
    <StyledInfoPage>
      <Info infoData={informationContent} />
    </StyledInfoPage>
  );
};
