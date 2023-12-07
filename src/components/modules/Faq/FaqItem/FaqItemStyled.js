import styled from 'styled-components';
import { Text } from 'components/global/MainText/MainText.styled';

export const ItemWrap = styled.li`
  padding-top: 17px;
  padding-bottom: 17px;
  border-top: 1px solid ${p => p.theme.colors.acCol};
  &:last-child {
    padding-bottom: 0;
  }

  @media (min-width: 1280px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const QuestionWrap = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

export const QuestionText = styled(Text)`
  font-size: 18px;
  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const AnswerText = styled(Text)`
  margin-top: 16px;
  padding-left: 24px;
  font-size: 14px;
  @media (min-width: 768px) {
    padding-left: 32px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    margin-top: 24px;
  }
`;

export const ToggleEl = styled.p`
  width: 16px;
  font-size: 16px;

  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p =>
    p.color === 'main' ? p.theme.colors.mainCol : p.theme.colors.acCol};

  @media (min-width: 768px) {
    width: 24px;
    font-size: 24px;
  }
`;
