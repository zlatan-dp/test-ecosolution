import { Container } from 'components/global/Container/Container';
import { Text } from 'components/global/MainText/MainText.styled';
import { Section } from 'components/global/Section/Section';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';
import { AboutItem } from './AboutItem/AboutItem';
import { AboutGridWrap } from './About.styled';

import CpuCharge from 'img/about/cpu-charge.svg';
import GlobalEdit from 'img/about/global-edit.svg';
import MaximizeCircle from 'img/about/maximize-circle.svg';
import Ranking from 'img/about/ranking.svg';

export const About = () => {
  return (
    <Section id={'about'}>
      <Container>
        <SectionTitle>Main values of our company</SectionTitle>
        <Text>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </Text>
        <AboutGridWrap>
          <AboutItem title="Openness" ico={MaximizeCircle}>
            to the world, people, new ideas and projects
          </AboutItem>
          <AboutItem title="Responsibility" ico={GlobalEdit}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </AboutItem>
          <AboutItem title="Innovation" ico={CpuCharge}>
            we use the latest technology to implement non-standard solutions
          </AboutItem>
          <AboutItem title="Quality" ico={Ranking}>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </AboutItem>
        </AboutGridWrap>
      </Container>
    </Section>
  );
};
