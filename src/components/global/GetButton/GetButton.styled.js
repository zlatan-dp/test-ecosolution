import styled from 'styled-components';

export const GetBtnEl = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.mainCol};
  color: ${p => p.theme.colors.mainCol};

  transition: var(--transition-bg);
`;

export const GetBtn = styled.button`
  padding: 10px 16px;
  border-radius: 500px;
  background-color: ${p => p.theme.colors.acCol};
  display: flex;
  gap: 12px;
  transition: var(--transition-bg), var(--transition-color);
  &:hover {
    background-color: ${p => p.theme.colors.mainCol};
    color: ${p => p.theme.colors.acCol};

    ${GetBtnEl} {
      background-color: ${p => p.theme.colors.acCol};
    }
  }
`;
