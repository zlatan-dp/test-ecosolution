import { Container } from 'components/global/Container/Container';
import { Logo } from 'components/global/Logo/Logo';
import { BurgerButton, HeaderBox, HeaderWrap } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ toggleModal }) => {
  return (
    <HeaderBox>
      <Container>
        <HeaderWrap>
          <Logo />

          <BurgerButton type="button" onClick={toggleModal} />
        </HeaderWrap>
      </Container>
    </HeaderBox>
  );
};

Header.propTypes = {
  toggleModal: PropTypes.func,
};
