import styled from 'styled-components';
import { Text } from 'components/global/MainText/MainText.styled';

export const LocationBtn = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.acCol};
  color: ${p => p.theme.colors.mainCol};
  transition: var(--transition-bg), var(--transition-color);
`;

export const CaseItemWrap = styled.div`
  background-color: ${p => p.theme.colors.grayBg};
  cursor: pointer;

  &:hover {
    ${LocationBtn} {
      background-color: ${p => p.theme.colors.mainCol};
      color: ${p => p.theme.colors.acCol};
    }
  }
`;

export const ItemImgWrap = styled.div``;

export const ItemImg = styled.img``;

export const ItemInfoWrap = styled.div`
  padding: 24px 12px 12px 12px;
  @media (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  gap: 61px;
  padding-bottom: 21px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.acCol};

  @media (min-width: 768px) and (max-width: 1280px) {
    height: 72px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 36px;
  }
`;

export const LocationName = styled(Text)`
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const CaseNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const CaseNameText = styled(Text)`
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;
