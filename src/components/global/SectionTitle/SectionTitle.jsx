import { Title } from './SectionTitle.styled';
import PropTypes from 'prop-types';

export const SectionTitle = ({ ta = 'left', children }) => {
  return <Title $ta={ta}>{children}</Title>;
};

SectionTitle.propTypes = {
  ta: PropTypes.string,
};
