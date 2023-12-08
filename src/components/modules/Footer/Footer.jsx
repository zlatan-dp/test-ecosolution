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
import { useMediaScreen } from 'components/hooks/useMediaScreen';

import { ReactComponent as FbIcon } from 'img/socIcons/facebook.svg';
import { ReactComponent as InstaIcon } from 'img/socIcons/instagram.svg';

import { PiArrowUp } from 'react-icons/pi';
import { MainText } from 'components/global/MainText/MainText';

export const Footer = () => {
  const { isTablet, isMob } = useMediaScreen();

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
                <InfoItem>
                  <SocList>
                    <SocItem href="https://www.facebook.com/" target="_blank">
                      <FbIcon />
                    </SocItem>
                    <SocItem href="https://www.instagram.com/" target="_blank">
                      <InstaIcon />
                    </SocItem>
                  </SocList>
                </InfoItem>
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
              <MainText>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </MainText>
            </DecorInfoWrap>
            <DecorInfoWrap>
              <InfoItem>
                <MainText>office@ecosolution.com</MainText>
              </InfoItem>

              <MainText>ecosolution © 2023</MainText>
            </DecorInfoWrap>
          </InfoList>
        </FooterWrap>
      </Container>
    </FooterBox>
  );
};
