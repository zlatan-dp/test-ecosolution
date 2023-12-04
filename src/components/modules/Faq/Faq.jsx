import { useState } from 'react';

import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';

import questionsAndAnswers from './FaqData.json';
import { FaqItem } from './FaqItem/FaqItem';

import { FaqText, ContactUsWrap } from './Faq.styled';
import { GetButton } from 'components/global/GetButton/GetButton';

import { Link } from 'react-scroll';

export const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(1);

  const toggleQuestion = questionId => {
    setOpenQuestion(prevOpenQuestion =>
      prevOpenQuestion === questionId ? null : questionId
    );
  };

  return (
    <Section id={'faq'}>
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
          <Link
            activeClass="active"
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <GetButton>Contact Us</GetButton>
          </Link>
        </ContactUsWrap>
      </Container>
    </Section>
  );
};
