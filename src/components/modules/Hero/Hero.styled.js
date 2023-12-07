import styled from 'styled-components';

export const HeroTitleWrap = styled.div`
  flex: 1;
  @media (min-width: 1280px) {
    min-width: 620px;

    flex: 0;
  }
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
  @media (min-width: 1280px) {
    width: 490px;
    font-size: 64px;
  }
`;

export const BoxWrap = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: start;
    gap: 43px;
    flex: 1;
  }
  @media (min-width: 1280px) {
    padding-left: 161px;
    flex: 0;
    flex-basis: 500px;
    gap: 20px;
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

  @media (min-width: 1280px) {
    justify-content: left;
  }
`;

export const AdressWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1280px) {
    min-width: 620px;
  }
`;

export const MailWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1280px) {
    padding-left: 161px;
  }
`;

export const HeroImg = styled.img``;
