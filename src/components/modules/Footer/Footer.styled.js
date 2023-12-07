import styled from 'styled-components';

export const FooterBox = styled.footer`
  padding-top: 16px;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-top: 50px;
  }
  @media (min-width: 1280px) {
    padding-top: 60px;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid ${p => p.theme.colors.acCol};

  @media (min-width: 768px) {
    padding-top: 40px;
  }
  @media (min-width: 1280px) {
    padding-top: 44px;
  }
`;

export const LogoAndLinksWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    gap: 48px;
  }
`;

export const DecorLeftWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
`;
export const DecorWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
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

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    gap: 24px;
  }
  @media (min-width: 1280px) {
    gap: 48px;
  }
`;
export const InfoItem = styled.div`
  @media (min-width: 1280px) {
    padding-left: 137px;
  }
`;

export const DecorInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
  }
`;
