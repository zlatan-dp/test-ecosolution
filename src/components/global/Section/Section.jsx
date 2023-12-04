import PropTypes from 'prop-types';
import { SectionBox } from './Section.styled';

export const Section = ({ id, pt, children }) => {
  return (
    <SectionBox id={id} $pt={pt}>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  pt: PropTypes.string,
  id: PropTypes.string,
};
