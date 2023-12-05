import styled from 'styled-components';

export const ElWrap = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding-top: 72px;

  @media (min-width: 768px) {
    padding-top: 101px;
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
  }
`;

export const ElNumber = styled.p`
  font-family: 'Oswald';
  font-size: 48px;
  font-weight: 700;
  color: ${p => p.theme.colors.acCol};

  @media (min-width: 768px) {
    font-size: 100px;
  }
`;

export const ElKwh = styled.p`
  font-family: 'Oswald';
  font-size: 24px;
  font-weight: 400;
  color: ${p => p.theme.colors.mainCol};
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
