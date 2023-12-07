import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  padding: 36px 12px;
  background-color: ${p => p.theme.colors.grayBg};

  @media (min-width: 768px) {
    padding: 36px 24px;
  }

  @media (min-width: 1280px) {
    padding: 48px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 28px;
`;

export const StyledField = styled.input`
  padding: 8px 0;
  border-bottom: 1px solid
    ${({ $error, theme }) => ($error ? theme.colors.error : theme.colors.acCol)};
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  outline: none;

  font-family: 'Fira Sans', sans-serif;
  font-size: 18px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.04em;
  color: ${p => p.theme.colors.mainCol};

  @media (min-width: 1280px) {
    padding: 12px 0;
    font-size: 20px;
  }
`;

export const StyledArea = styled.textarea`
  height: 147px;
  margin-bottom: 16px;
  padding: 8px 0;
  border-bottom: 1px solid ${p => p.theme.colors.acCol};

  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  outline: none;

  font-family: 'Fira Sans', sans-serif;
  font-size: 18px;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.04em;
  color: ${p => p.theme.colors.mainCol};

  @media (min-width: 1280px) {
    padding: 12px 0;
    font-size: 20px;
  }
`;

export const StyledError = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${p => p.theme.colors.error};
  font-size: 12px;
`;
