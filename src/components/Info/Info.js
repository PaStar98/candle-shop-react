import { InfoItem } from './InfoItem';
import { StyledInfoArticles } from '../styled/styled-info/Info.styled';
import { StyledCard } from '../styled/styled-layout/Card.styled';

export const Info = ({ infoData }) => {
  return (
    <>
      {infoData.map((el) => (
        <StyledCard>
          <StyledInfoArticles>
            <InfoItem key={el.id} header={el.header} text={el.paragraph} />
          </StyledInfoArticles>
        </StyledCard>
      ))}
    </>
  );
};
