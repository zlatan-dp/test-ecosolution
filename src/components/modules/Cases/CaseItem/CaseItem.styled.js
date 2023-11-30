import styled from 'styled-components';
import ArrowRightUp from 'img/cases/arrow-right-up.svg';

export const CaseItemWrap = styled.div`
  background-color: ${p => p.theme.colors.grayBg};
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

export const LocationBtn = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.acCol};
  background-image: url(${ArrowRightUp});
  background-repeat: no-repeat;
  background-position: center;
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
