import styled from 'styled-components';
import ArrowRight from 'img/arrow-right.svg';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  height: 39px;
  padding: 4px 4px 4px 16px;
  border: 1px solid ${p => p.theme.colors.acCol};
  border-radius: 500px;
  background-color: ${p => p.theme.colors.white};

  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.125;
  text-align: justify;
  letter-spacing: -0.04em;
  color: ${p => p.theme.colors.mainCol};

  transition: var(--transition-bg), var(--transition-color);

  &:hover {
    background-color: ${p => p.theme.colors.mainCol};
    color: ${p => p.theme.colors.acCol};
  }
`;

export const BtnEl = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.acCol};
  background-image: url(${ArrowRight});
  background-repeat: no-repeat;
  background-position: center;
`;

export const HeroImg = styled.img``;
