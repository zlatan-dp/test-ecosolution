import styled from 'styled-components';

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ElWrap = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding-top: 72px;

  @media (min-width: 768px) {
    padding-top: 111px;
  }
  @media (min-width: 768px) {
    padding-top: 96px;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 1px;
    height: 48px;
    top: 0px;
    background-color: ${p => p.theme.colors.acCol};

    @media (min-width: 768px) {
      height: 87px;
    }
    @media (min-width: 1280px) {
      top: -8px;
    }
  }
`;

export const ElNumber = styled.p`
  font-family: 'Oswald';
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  color: ${p => p.theme.colors.acCol};

  @media (min-width: 768px) {
    font-size: 100px;
  }
  @media (min-width: 1280px) {
    font-size: 160px;
  }
`;

export const ElKwh = styled.p`
  font-family: 'Oswald';
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  color: ${p => p.theme.colors.mainCol};
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
