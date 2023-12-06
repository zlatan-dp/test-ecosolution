import { Container } from 'components/global/Container/Container';
import {
  FooterBox,
  LogoAndLinksWrap,
  UpButton,
  SocList,
  SocItem,
  InfoList,
  InfoItem,
  FooterWrap,
  DecorWrap,
  DecorInfoWrap,
} from './Footer.styled';
import { Logo } from 'components/global/Logo/Logo';

import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import { ReactComponent as FbIcon } from 'img/socIcons/facebook.svg';
import { ReactComponent as InstaIcon } from 'img/socIcons/instagram.svg';

import { PiArrowUp } from 'react-icons/pi';
import { MainText } from 'components/global/MainText/MainText';

export const Footer = () => {
  const isMob = useMediaQuery({ maxWidth: 767.9 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <FooterBox>
      <Container>
        <FooterWrap>
          <LogoAndLinksWrap>
            <DecorWrap>
              <Logo />
            </DecorWrap>
            <DecorWrap>
              {isTablet && (
                <SocList>
                  <SocItem href="https://www.facebook.com/" target="_blank">
                    <FbIcon />
                  </SocItem>
                  <SocItem href="https://www.instagram.com/" target="_blank">
                    <InstaIcon />
                  </SocItem>
                </SocList>
              )}

              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <UpButton>
                  <PiArrowUp size={16} color={'currentColor'} />
                </UpButton>
              </Link>
            </DecorWrap>
          </LogoAndLinksWrap>
          {isMob && (
            <SocList>
              <SocItem href="https://www.facebook.com/" target="_blank">
                <FbIcon />
              </SocItem>
              <SocItem href="https://www.instagram.com/" target="_blank">
                <InstaIcon />
              </SocItem>
            </SocList>
          )}
          <InfoList>
            <DecorInfoWrap>
              <InfoItem>
                <MainText>
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </MainText>
              </InfoItem>
            </DecorInfoWrap>
            <DecorInfoWrap>
              <InfoItem>
                <MainText>office@ecosolution.com</MainText>
              </InfoItem>
              <InfoItem>
                <MainText>ecosolution © 2023</MainText>
              </InfoItem>
            </DecorInfoWrap>
          </InfoList>
        </FooterWrap>
      </Container>
    </FooterBox>
  );
};
