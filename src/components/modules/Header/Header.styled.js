import styled from 'styled-components';
import BurgerSvg from 'img/Menu-burger.svg';

export const HeaderBox = styled.header`
  position: fixed;
  width: 100%;
  padding-top: 36px;
  background-color: ${p => p.theme.colors.white};
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 269px;
  height: 40px;
`;

export const BurgerButton = styled.button`
  width: 39px;
  height: 39px;
  margin-left: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.acLi};
  background-image: url(${BurgerSvg});
  background-repeat: no-repeat;
  background-position: center;
  transition: var(--transition-bg);

  &:hover {
    background-color: ${p => p.theme.colors.acCol};
  }
`;
