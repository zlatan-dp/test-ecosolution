import styled from 'styled-components';

export const CloseWrap = styled.div`
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid ${p => p.theme.colors.white};
`;

export const CloseBtn = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  background-color: transparent;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.04em;
  color: ${p => p.theme.colors.white};
`;

export const MenuWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.25);
  cursor: pointer;

  transition: var(--transition-color);

  &:hover {
    color: ${p => p.theme.colors.white};
  }
  .active {
    color: ${p => p.theme.colors.acCol};
  }
`;

export const SocList = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
  justify-content: start;
`;

export const SocItem = styled.a`
  color: ${p => p.theme.colors.white};
  display: block;

  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.acCol};
  }

  svg {
    width: 24px;
    height: 24px;
    transition: var(--transition-color);
  }
`;
