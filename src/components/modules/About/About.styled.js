import styled from 'styled-components';

import { Text } from 'components/global/MainText/MainText.styled';

export const TextAbout = styled(Text)`
  @media (min-width: 768px) {
    margin-left: 11px;
  }
  @media (min-width: 1280px) {
    margin-left: 161px;
  }
`;

export const TextTilteWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const TilteWrap = styled.div`
  flex: 1;
`;
export const TextWrap = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    border-left: 1px solid ${p => p.theme.colors.acCol};
  }
`;

export const AboutGridWrap = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    & > *:nth-child(3) {
      grid-column: span 2;
    }
    & > *:nth-child(4) {
      grid-column: span 2;
    }
  }

  @media (min-width: 1280px) {
    grid-row-gap: 48px;
    grid-column-gap: 48px;
  }
`;

export const AboutImgWrap = styled.img``;
