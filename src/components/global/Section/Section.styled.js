import styled from 'styled-components';

export const SectionBox = styled.section`
  padding-top: ${p => (p.$pt ? p.$pt : '16px')};
  padding-bottom: 16px;
`;
