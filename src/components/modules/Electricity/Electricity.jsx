import { Section } from 'components/global/Section/Section';
import { Container } from 'components/global/Container/Container';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';
import { ElKwh, ElNumber, ElWrap, TitleWrap } from './Electricity.styled';

export const Electricity = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <SectionTitle ta={'center'} width={'400px'}>
            Electricity we produced for all time
          </SectionTitle>
        </TitleWrap>

        <ElWrap>
          <ElNumber>1.134.147.814</ElNumber>
          <ElKwh>kWh</ElKwh>
        </ElWrap>
      </Container>
    </Section>
  );
};
