import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import {
  HeroTitle,
  BoxWrap,
  DecorWrap,
  InfoWrap,
  HeroImg,
  HeroTitleWrap,
  TextWrap,
} from './Hero.styled';
import { MainText } from 'components/global/MainText/MainText';
import { Button } from 'components/global/Button/Button';

import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import HeroImgMob from 'img/hero/hero-mob.jpg';
import HeroImgTab from 'img/hero/hero-tab.jpg';

export const Hero = () => {
  const isMob = useMediaQuery({ maxWidth: 767.9 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <Section id={'hero'} pt={isMob ? '222px' : isTablet ? '240px' : '264px'}>
      <Container>
        <DecorWrap>
          <HeroTitleWrap>
            <HeroTitle>RENEWABLE ENERGY For any task</HeroTitle>
          </HeroTitleWrap>
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
              offset={-100}
              duration={500}
            >
              <Button>Learn more</Button>
            </Link>
          </BoxWrap>
        </DecorWrap>
        <InfoWrap>
          <TextWrap>
            <MainText>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</MainText>
          </TextWrap>
          <TextWrap>
            <MainText>office@ecosolution.com</MainText>
            {isTablet && <MainText>ecosolution © 2023</MainText>}
          </TextWrap>
        </InfoWrap>
        {isMob && <HeroImg src={HeroImgMob} alt="power generation" />}
        {isTablet && <HeroImg src={HeroImgTab} alt="power generation" />}
      </Container>
    </Section>
  );
};
