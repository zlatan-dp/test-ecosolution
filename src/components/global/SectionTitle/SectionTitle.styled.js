import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Oswald';
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: ${p => p.$ta};
  width: ${p => (p.$width ? p.$width : '100%')};

  color: ${p => p.theme.colors.mainCol};

  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;
