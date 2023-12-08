import { Container } from 'components/global/Container/Container';
import { Logo } from 'components/global/Logo/Logo';
import { BurgerButton, HeaderBox, HeaderWrap, BtnWrap } from './Header.styled';
import PropTypes from 'prop-types';
import { GetButton } from 'components/global/GetButton/GetButton';

import { useMediaScreen } from 'components/hooks/useMediaScreen';

import { Link } from 'react-scroll';

export const Header = ({ toggleModal, showModal }) => {
  const { isTablet } = useMediaScreen();
  return (
    <HeaderBox>
      <Container>
        <HeaderWrap>
          <Logo />
          <BtnWrap>
            {!showModal && <BurgerButton type="button" onClick={toggleModal} />}

            {isTablet && (
              <Link
                activeClass="active"
                to="contactUs"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <GetButton>Get in touch</GetButton>
              </Link>
            )}
          </BtnWrap>
        </HeaderWrap>
      </Container>
    </HeaderBox>
  );
};

Header.propTypes = {
  toggleModal: PropTypes.func,
  showModal: PropTypes.bool,
};
