import { Section } from 'components/global/Section/Section';
import { Container } from 'components/global/Container/Container';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';
import { ElKwh, ElNumber, ElWrap } from './Electricity.styled';

export const Electricity = () => {
  return (
    <Section>
      <Container>
        <SectionTitle ta={'center'}>
          Electricity we produced for all time
        </SectionTitle>
        <ElWrap>
          <ElNumber>1.134.147.814</ElNumber>
          <ElKwh>kWh</ElKwh>
        </ElWrap>
      </Container>
    </Section>
  );
};
