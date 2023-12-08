import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import {
  HeroTitle,
  BoxWrap,
  DecorWrap,
  InfoWrap,
  HeroImg,
  HeroTitleWrap,
  AdressWrap,
  MailWrap,
} from './Hero.styled';
import { MainText } from 'components/global/MainText/MainText';
import { Button } from 'components/global/Button/Button';

import { Link } from 'react-scroll';
import { useMediaScreen } from 'components/hooks/useMediaScreen';

import HeroImgMob from 'img/hero/hero-mob.jpg';
import HeroImgTab from 'img/hero/hero-tab.jpg';
import HeroImgDesk from 'img/hero/hero-desk.jpg';

export const Hero = () => {
  const { isMob, isTablet, isTabletOnly, isDesktop } = useMediaScreen();

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
          <AdressWrap>
            <MainText>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</MainText>
          </AdressWrap>
          <MailWrap>
            <MainText>office@ecosolution.com</MainText>
            {(isTablet || isDesktop) && <MainText>ecosolution © 2023</MainText>}
          </MailWrap>
        </InfoWrap>
        {isMob && <HeroImg src={HeroImgMob} alt="power generation" />}
        {isTabletOnly && <HeroImg src={HeroImgTab} alt="power generation" />}
        {isDesktop && <HeroImg src={HeroImgDesk} alt="power generation" />}
      </Container>
    </Section>
  );
};
