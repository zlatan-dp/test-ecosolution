import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.04em;
  color: ${p => p.theme.colors.mainCol};
`;
