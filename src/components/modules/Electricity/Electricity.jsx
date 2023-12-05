import { Section } from 'components/global/Section/Section';
import { Container } from 'components/global/Container/Container';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';
import { ElKwh, ElNumber, ElWrap, TitleWrap } from './Electricity.styled';
import { useState, useEffect } from 'react';

export const Electricity = () => {
  const [Counter, setCounter] = useState(113447814);

  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Container>
        <TitleWrap>
          <SectionTitle ta={'center'} width={'400px'}>
            Electricity we produced for all time
          </SectionTitle>
        </TitleWrap>

        <ElWrap>
          <ElNumber>{formatNumber(Counter)}</ElNumber>
          <ElKwh>kWh</ElKwh>
        </ElWrap>
      </Container>
    </Section>
  );
};
