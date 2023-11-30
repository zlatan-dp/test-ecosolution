import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';
import { CaseItem } from './CaseItem/CaseItem';

export const Cases = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Successful cases of our company</SectionTitle>
        <CaseItem />
      </Container>
    </Section>
  );
};
