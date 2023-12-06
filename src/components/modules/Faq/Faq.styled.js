import styled from 'styled-components';
import { Text } from 'components/global/MainText/MainText.styled';

export const FaqBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
`;

export const FaqText = styled(Text)`
  font-size: 18px;
  text-align: center;
`;

export const FaqList = styled.ul`
  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const ContactUsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const DecorWrap = styled.div`
  margin-top: 36px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    flex: 1;
    margin-top: 0;
  }
`;
