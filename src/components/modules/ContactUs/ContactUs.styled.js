import styled from 'styled-components';
import { Text } from 'components/global/MainText/MainText.styled';

export const ContactBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
  @media (min-width: 1280px) {
    gap: 48px;
  }
`;

export const FormtBox = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    flex: 1;
  }
  @media (min-width: 1280px) {
    gap: 32px;
  }
`;

export const ContactItem = styled.li`
  width: 244px;
  @media (min-width: 1280px) {
    width: auto;
  }
`;

export const ContactTitle = styled(Text)`
  margin-bottom: 8px;
  @media (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const ContactText = styled(Text)`
  font-size: 20px;
  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const PhonesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SocWrap = styled.div`
  display: flex;
  /* padding: 12px; */
  gap: 8px;
`;

export const IconWrapper = styled.div`
  color: ${p => p.theme.colors.mainCol};
  height: 24px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    transition: var(--transition-color);
  }
`;

export const ContactWrap = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${IconWrapper} {
      color: ${p => p.theme.colors.acCol};
    }
  }
`;

export const IconSocWrapper = styled.a`
  color: ${p => p.theme.colors.mainCol};
  display: block;
  /* height: 24px; */
  padding: 12px;
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.acCol};
  }

  svg {
    width: 24px;
    height: 24px;
    transition: var(--transition-color);
  }

  @media (min-width: 1280px) {
    padding: 0px;
  }
`;
