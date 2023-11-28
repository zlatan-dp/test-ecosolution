import { Container } from 'components/global/Container/Container';
import { BurgerButton, HeaderBox, Logo } from './Header.styled';
import LogoSvg from 'img/Ecosolution-logo.svg';

export const Header = () => {
  return (
    <Container>
      <HeaderBox>
        <Logo src={LogoSvg} />
        <BurgerButton />
      </HeaderBox>
    </Container>
  );
};
