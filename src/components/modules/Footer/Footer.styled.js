import styled from 'styled-components';

export const FooterBox = styled.footer`
  padding-top: 16px;
  padding-bottom: 24px;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid ${p => p.theme.colors.acCol};
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UpButton = styled.button`
  width: 32px;
  height: 32px;
  margin-left: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.acCol};
  color: ${p => p.theme.colors.mainCol};

  transition: var(--transition-bg), var(--transition-color);

  &:hover {
    background-color: ${p => p.theme.colors.mainCol};
    color: ${p => p.theme.colors.acCol};
  }
`;

export const SocList = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const SocItem = styled.a`
  color: ${p => p.theme.colors.mainCol};
  display: block;
  /* height: 24px; */
  /* padding: 12px; */
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

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  gap: 16px;
`;
export const InfoItem = styled.li``;
