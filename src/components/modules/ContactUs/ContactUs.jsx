import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';
import {
  ContactItem,
  ContactList,
  ContactTitle,
  ContactText,
  PhonesWrap,
  IconWrapper,
  ContactWrap,
  SocWrap,
  IconSocWrapper,
} from './ContactUs.styled';

import { ReactComponent as FbIcon } from 'img/socIcons/facebook.svg';
import { ReactComponent as InstaIcon } from 'img/socIcons/instagram.svg';
import { ReactComponent as PhoneIcon } from 'img/socIcons/call.svg';
import { ReactComponent as MapIcon } from 'img/socIcons/map.svg';
import { ReactComponent as MailIcon } from 'img/socIcons/sms.svg';
import { ContactForm } from './ContactForm/ContactForm';

export const ContactUs = () => {
  return (
    <Section id={'contactUs'}>
      <Container>
        <SectionTitle ta={'center'}>Contact us</SectionTitle>
        <ContactList>
          <ContactItem>
            <ContactTitle>Phone:</ContactTitle>
            <PhonesWrap>
              <ContactWrap href="tel:+80981234567">
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                <ContactText>38 (098) 12 34 567</ContactText>
              </ContactWrap>
              <ContactWrap href="tel:+80931234567">
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                <ContactText>38 (093) 12 34 567</ContactText>
              </ContactWrap>
            </PhonesWrap>
          </ContactItem>
          <ContactItem>
            <ContactTitle>E-mail:</ContactTitle>
            <ContactWrap href="mailto:office@ecosolution.com">
              <IconWrapper>
                <MailIcon />
              </IconWrapper>
              <ContactText>office@ecosolution.com</ContactText>
            </ContactWrap>
          </ContactItem>
          <ContactItem>
            <ContactTitle>Address:</ContactTitle>
            <ContactWrap href="https://www.google.com/maps/" target="_blank">
              <IconWrapper>
                <MapIcon />
              </IconWrapper>
              <ContactText>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </ContactText>
            </ContactWrap>
          </ContactItem>
          <ContactItem>
            <ContactTitle>Social Networks:</ContactTitle>
            <SocWrap>
              <IconSocWrapper href="https://www.facebook.com/" target="_blank">
                <FbIcon />
              </IconSocWrapper>
              <IconSocWrapper href="https://www.instagram.com/" target="_blank">
                <InstaIcon />
              </IconSocWrapper>
            </SocWrap>
          </ContactItem>
        </ContactList>
        <ContactForm />
      </Container>
    </Section>
  );
};
