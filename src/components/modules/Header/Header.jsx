import { Container } from 'components/global/Container/Container';
import { Logo } from 'components/global/Logo/Logo';
import { BurgerButton, HeaderBox, HeaderWrap, BtnWrap } from './Header.styled';
import PropTypes from 'prop-types';
import { GetButton } from 'components/global/GetButton/GetButton';

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

export const Header = ({ toggleModal }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <HeaderBox>
      <Container>
        <HeaderWrap>
          <Logo />
          <BtnWrap>
            <BurgerButton type="button" onClick={toggleModal} />
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
};
