import { useState, useEffect } from 'react';

import { Container } from 'components/global/Container/Container';
import { Logo } from 'components/global/Logo/Logo';
import { BurgerButton, HeaderBox, HeaderWrap, BtnWrap } from './Header.styled';
import PropTypes from 'prop-types';
import { GetButton } from 'components/global/GetButton/GetButton';
import { debounce } from 'lodash';

import { useMediaScreen } from 'components/hooks/useMediaScreen';

import { Link } from 'react-scroll';

export const Header = ({ toggleModal, showModal }) => {
  const { isTablet } = useMediaScreen();
  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: '#fff',
    transition: 'background-color 0.3s ease-out',
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      console.log('kyky');
      setHeaderStyle({
        backgroundColor: getRandomColor(),
        transition: 'background-color 0.3s ease-out',
      });
    }, 50);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getRandomColor = () => {
    const min = 100;
    const max = 200;
    return `rgb(${Math.floor(Math.random() * (240 - 250 + 1)) + min}, ${
      Math.floor(Math.random() * (max - min + 1)) + min
    }, 0, 0.7)`;
  };

  return (
    <HeaderBox style={headerStyle}>
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
