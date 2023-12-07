import styled from 'styled-components';
import { Text } from 'components/global/MainText/MainText.styled';

export const AboutItemWrap = styled.div`
  padding: 13px 12px 12px 12px;
  background-color: ${p => p.theme.colors.grayBg};
  @media (min-width: 768px) {
    padding: 12px;
  }
  @media (min-width: 1280px) {
    padding: 48px 24px 24px 24px;
  }
`;

export const AboutItemTitle = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 33px;
  font-family: 'Oswald';
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.5;
  color: ${p => p.theme.colors.mainCol};
  margin-bottom: 12px;

  &::before {
    content: '';
    margin-right: 8px;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(${p => p.$ico});
    background-repeat: no-repeat;
    background-size: cover;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.acCol};
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding-bottom: 51px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 94px;
    margin-bottom: 24px;
    font-size: 32px;

    &::before {
      width: 24px;
      height: 24px;
    }
  }
`;

export const AboutItemText = styled(Text)`
  font-size: 14px;
  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;
