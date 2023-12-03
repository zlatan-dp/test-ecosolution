import styled from 'styled-components';

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
`;

export const LocationWrap = styled.div`
  display: flex;
  gap: 61px;
  padding-bottom: 21px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.colors.acCol};
`;

export const LocationName = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 18px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.04em;
  color: ${p => p.theme.colors.mainCol};
`;

export const CaseNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const CaseNameText = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 12px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.04em;
  color: ${p => p.theme.colors.mainCol};
`;
