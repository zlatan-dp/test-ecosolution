import PropTypes from 'prop-types';
import { SectionBox } from './Section.styled';

export const Section = ({ pt, children }) => {
  return <SectionBox pt={pt}>{children}</SectionBox>;
};

Section.propTypes = {
  pt: PropTypes.string,
};
