import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import {
  HeroTitle,
  BoxWrap,
  DecorWrap,
  InfoWrap,
  HeroImg,
} from './Hero.styled';
import { MainText } from 'components/global/MainText/MainText';
import { Button } from 'components/global/Button/Button';

import { Link } from 'react-scroll';

import HeroImgMob from 'img/hero/hero-mob.png';

export const Hero = () => {
  return (
    <Section id={'hero'} pt={'222px'}>
      <Container>
        <DecorWrap>
          <HeroTitle>RENEWABLE ENERGY For any task</HeroTitle>
          <BoxWrap>
            <MainText>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </MainText>
            <Link
              activeClass="active"
              to="cases"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button>Learn more</Button>
            </Link>
          </BoxWrap>
        </DecorWrap>
        <InfoWrap>
          <MainText>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</MainText>
          <MainText>office@ecosolution.com</MainText>
        </InfoWrap>
        <HeroImg src={HeroImgMob} alt="power generation" />
      </Container>
    </Section>
  );
};
