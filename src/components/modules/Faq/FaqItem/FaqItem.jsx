import PropTypes from 'prop-types';
import {
  ItemWrap,
  QuestionWrap,
  QuestionText,
  AnswerText,
  ToggleEl,
} from './FaqItemStyled';

export const FaqItem = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <ItemWrap key={id}>
      <QuestionWrap onClick={() => onToggle(id)}>
        {isOpen ? (
          <ToggleEl color={'main'}>-</ToggleEl>
        ) : (
          <ToggleEl>+</ToggleEl>
        )}
        <QuestionText>{question}</QuestionText>
      </QuestionWrap>
      {isOpen && <AnswerText>{answer}</AnswerText>}
    </ItemWrap>
  );
};

FaqItem.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
