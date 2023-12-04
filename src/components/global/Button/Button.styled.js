import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  margin-left: ${p => (p.$ml ? p.$ml : 'none')};
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

  transition: var(--transition-bg), var(--transition-color),
    var(--transition-border);

  &:hover {
    background-color: ${p => p.theme.colors.mainCol};
    color: ${p => p.theme.colors.acCol};
    border: 1px solid ${p => p.theme.colors.mainCol};
  }

  &:disabled {
    background-color: ${p => p.theme.colors.grayBg};
    cursor: not-allowed;
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
  color: ${p => p.theme.colors.mainCol};
`;
