import { BoxWrapper } from './Box.styled';

export const Box = ({ d = 'flex', g = '24px', fd = 'row', children }) => {
  return (
    <BoxWrapper d={d} g={g} fd={fd}>
      {children}
    </BoxWrapper>
  );
};
