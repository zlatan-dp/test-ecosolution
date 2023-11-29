import styled from 'styled-components';

export const HeroTitle = styled.h1`
  font-family: 'Oswald';
  font-size: 36px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${p => p.theme.colors.mainCol};
`;

export const BoxWrap = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`;

export const DecorWrap = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid ${p => p.theme.colors.acCol};
`;

export const InfoWrap = styled.div`
  padding-top: 24px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
