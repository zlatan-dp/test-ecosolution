import styled from 'styled-components';
import { Text } from 'components/global/MainText/MainText.styled';

export const ItemWrap = styled.li`
  padding: 17px 0;
  border-top: 1px solid ${p => p.theme.colors.acCol};
`;

export const QuestionWrap = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

export const QuestionText = styled(Text)`
  font-size: 18px;
`;

export const AnswerText = styled(Text)`
  margin-top: 16px;
  padding-left: 24px;
  font-size: 14px;
`;

export const ToggleEl = styled.p`
  width: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p =>
    p.color === 'main' ? p.theme.colors.mainCol : p.theme.colors.acCol};
`;
