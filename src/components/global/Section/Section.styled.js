import styled from 'styled-components';

export const SectionBox = styled.section`
  padding-top: ${p => (p.$pt ? p.$pt : '16px')};
  padding-bottom: 16px;

  @media (min-width: 768px) {
    padding-top: ${p => (p.$pt ? p.$pt : '50px')};
    padding-bottom: 50px;
  }
  @media (min-width: 1280px) {
    padding-top: ${p => (p.$pt ? p.$pt : '60px')};
    padding-bottom: 60px;
  }
`;
