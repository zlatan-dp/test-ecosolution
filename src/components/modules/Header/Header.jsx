import { Container } from 'components/global/Container/Container';
import { BurgerButton, HeaderBox, HeaderWrap, Logo } from './Header.styled';
import LogoSvg from 'img/Ecosolution-logo.svg';

export const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <HeaderWrap>
          <Logo src={LogoSvg} />
          <BurgerButton />
        </HeaderWrap>
      </Container>
    </HeaderBox>
  );
};
