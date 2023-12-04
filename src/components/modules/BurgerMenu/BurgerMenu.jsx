import {
  CloseWrap,
  CloseBtn,
  MenuList,
  MenuItem,
  SocList,
  SocItem,
  MenuWrap,
} from './BurgerMenu.styled';

import { IoClose } from 'react-icons/io5';
import { PiArrowUpRight } from 'react-icons/pi';

import { ReactComponent as FbIcon } from 'img/socIcons/facebook.svg';
import { ReactComponent as InstaIcon } from 'img/socIcons/instagram.svg';

import { Link } from 'react-scroll';

import PropTypes from 'prop-types';

export const BurgerMenu = ({ toggleModal }) => {
  return (
    <>
      <MenuWrap>
        <CloseWrap>
          <CloseBtn type="button" onClick={toggleModal}>
            <IoClose size={20} />
            close
          </CloseBtn>
        </CloseWrap>

        <MenuList>
          <MenuItem>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Main <PiArrowUpRight size={16} color={'currentColor'} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About <PiArrowUpRight size={16} color={'currentColor'} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              activeClass="active"
              to="cases"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Cases <PiArrowUpRight size={16} color={'currentColor'} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              FAQ <PiArrowUpRight size={16} color={'currentColor'} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              activeClass="active"
              to="contactUs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Us <PiArrowUpRight size={16} color={'currentColor'} />
            </Link>
          </MenuItem>
        </MenuList>

        <SocList>
          <SocItem href="https://www.facebook.com/" target="_blank">
            <FbIcon />
          </SocItem>
          <SocItem href="https://www.instagram.com/" target="_blank">
            <InstaIcon />
          </SocItem>
        </SocList>
      </MenuWrap>
    </>
  );
};

BurgerMenu.propTypes = {
  toggleModal: PropTypes.func,
};
