import styled from 'styled-components';

export const AboutItemWrap = styled.div`
  padding: 13px 12px 12px 12px;
  background-color: ${p => p.theme.colors.grayBg};
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
    background-image: url(${p => p.ico});
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
`;

export const AboutItemText = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.04em;
  color: ${p => p.theme.colors.mainCol};
`;
