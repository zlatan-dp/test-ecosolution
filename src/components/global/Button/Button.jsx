import { PiArrowRightLight } from 'react-icons/pi';

import { Btn, BtnEl } from './Button.styled';

export const Button = ({ children }) => {
  return (
    <Btn>
      {children}
      <BtnEl>
        <PiArrowRightLight size={16} color={'currentColor'} />
      </BtnEl>
    </Btn>
  );
};
