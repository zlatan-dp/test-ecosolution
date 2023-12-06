import { useState } from 'react';

import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';

import questionsAndAnswers from './FaqData.json';
import { FaqItem } from './FaqItem/FaqItem';

import {
  FaqText,
  ContactUsWrap,
  FaqList,
  DecorWrap,
  FaqBox,
} from './Faq.styled';
import { GetButton } from 'components/global/GetButton/GetButton';

import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

export const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(1);
  const isMob = useMediaQuery({ maxWidth: 767.9 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const toggleQuestion = questionId => {
    setOpenQuestion(prevOpenQuestion =>
      prevOpenQuestion === questionId ? null : questionId
    );
  };

  return (
    <Section id={'faq'}>
      <Container>
        <FaqBox>
          {isMob && <SectionTitle>Frequently Asked Questions</SectionTitle>}

          <FaqList>
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
          </FaqList>
          <DecorWrap>
            {isTablet && (
              <SectionTitle>Frequently Asked Questions</SectionTitle>
            )}
            <ContactUsWrap>
              <FaqText>Didn't find the answer to your question?</FaqText>
              <Link
                activeClass="active"
                to="contactUs"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <GetButton>Contact Us</GetButton>
              </Link>
            </ContactUsWrap>
          </DecorWrap>
        </FaqBox>
      </Container>
    </Section>
  );
};
