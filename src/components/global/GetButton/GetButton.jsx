import { GetBtn, GetBtnEl } from './GetButton.styled';
import { PiArrowDown } from 'react-icons/pi';

export const GetButton = ({ children }) => {
  return (
    <GetBtn>
      {children}
      <GetBtnEl>
        <PiArrowDown size={9} color="currentColor" />
      </GetBtnEl>
    </GetBtn>
  );
};
