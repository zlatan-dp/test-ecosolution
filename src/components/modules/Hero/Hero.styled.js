import styled from 'styled-components';

export const HeroTitleWrap = styled.div`
  flex: 1;
`;

export const HeroTitle = styled.h1`
  font-family: 'Oswald';
  font-size: 36px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${p => p.theme.colors.mainCol};
  width: 286px;
  line-height: 1;

  @media (min-width: 768px) {
    width: 222px;
    font-size: 48px;
  }
`;

export const BoxWrap = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media (min-width: 768px) {
    align-items: start;
    gap: 43px;
  }
`;

export const DecorWrap = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding-bottom: 24px;
  border-bottom: 1px solid ${p => p.theme.colors.acCol};

  @media (min-width: 768px) {
    align-items: center;

    flex-direction: row;
    gap: 0;
  }
`;

export const InfoWrap = styled.div`
  padding-top: 24px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    margin-bottom: 40px;
  }
`;

export const TextWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const HeroImg = styled.img``;
