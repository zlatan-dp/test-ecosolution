import { Container } from 'components/global/Container/Container';
import {
  FooterBox,
  LogoWrap,
  UpButton,
  SocList,
  SocItem,
  InfoList,
  InfoItem,
  FooterWrap,
} from './Footer.styled';
import { Logo } from 'components/global/Logo/Logo';

import { Link } from 'react-scroll';

import { ReactComponent as FbIcon } from 'img/socIcons/facebook.svg';
import { ReactComponent as InstaIcon } from 'img/socIcons/instagram.svg';

import { PiArrowUp } from 'react-icons/pi';
import { MainText } from 'components/global/MainText/MainText';

export const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <FooterWrap>
          <LogoWrap>
            <Logo />
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <UpButton>
                <PiArrowUp size={16} color={'currentColor'} />
              </UpButton>
            </Link>
          </LogoWrap>
          <SocList>
            <SocItem href="https://www.facebook.com/" target="_blank">
              <FbIcon />
            </SocItem>
            <SocItem href="https://www.instagram.com/" target="_blank">
              <InstaIcon />
            </SocItem>
          </SocList>
          <InfoList>
            <InfoItem>
              <MainText>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </MainText>
            </InfoItem>
            <InfoItem>
              <MainText>office@ecosolution.com</MainText>
            </InfoItem>
            <InfoItem>
              <MainText>ecosolution © 2023</MainText>
            </InfoItem>
          </InfoList>
        </FooterWrap>
      </Container>
    </FooterBox>
  );
};
