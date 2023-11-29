import styled from 'styled-components';

export const BoxWrapper = styled.div`
  display: ${p => p.d};
  gap: ${p => p.g};
  flex-direction: ${p => p.fd};
  align-items: center;
  /* padding-top: ${p => (p.pt ? p.pt : '16px')}; */
`;
