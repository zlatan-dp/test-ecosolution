import {
  AboutItemText,
  AboutItemTitle,
  AboutItemWrap,
} from './AboutItem.styled';
import PropTypes from 'prop-types';

export const AboutItem = ({ title, ico, children }) => {
  return (
    <AboutItemWrap>
      <AboutItemTitle ico={ico}>{title}</AboutItemTitle>
      <AboutItemText>{children}</AboutItemText>
    </AboutItemWrap>
  );
};

AboutItem.propTypes = {
  title: PropTypes.string,
  ico: PropTypes.string,
};
