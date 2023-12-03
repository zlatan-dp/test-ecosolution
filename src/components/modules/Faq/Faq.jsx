import { useState } from 'react';

import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';

import questionsAndAnswers from './FaqData.json';
import { FaqItem } from './FaqItem/FaqItem';

import { FaqText, ContactUsWrap } from './Faq.styled';
import { GetButton } from 'components/global/GetButton/GetButton';

export const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(1);

  const toggleQuestion = questionId => {
    setOpenQuestion(prevOpenQuestion =>
      prevOpenQuestion === questionId ? null : questionId
    );
  };

  return (
    <Section>
      <Container>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <ul>
          {questionsAndAnswers.map(({ id, question, answer }) => (
            <FaqItem
              key={id}
              id={id}
              question={question}
              answer={answer}
              isOpen={openQuestion === id}
              onToggle={toggleQuestion}
            />
          ))}
        </ul>
        <ContactUsWrap>
          <FaqText>Didn't find the answer to your question?</FaqText>
          <GetButton>Contact Us</GetButton>
        </ContactUsWrap>
      </Container>
    </Section>
  );
};
