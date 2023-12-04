import PropTypes from 'prop-types';

import { PiArrowRightLight } from 'react-icons/pi';

import { Btn, BtnEl } from './Button.styled';

export const Button = ({ ml, children }) => {
  return (
    <Btn $ml={ml}>
      {children}
      <BtnEl>
        <PiArrowRightLight size={16} color={'currentColor'} />
      </BtnEl>
    </Btn>
  );
};

Button.propTypes = {
  ml: PropTypes.string,
};
