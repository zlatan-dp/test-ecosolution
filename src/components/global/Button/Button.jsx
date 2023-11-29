import { Btn, BtnEl } from './Button.styled';

export const Button = ({ children }) => {
  return (
    <Btn>
      {children}
      <BtnEl />
    </Btn>
  );
};
