import { Title } from './SectionTitle.styled';
import PropTypes from 'prop-types';

export const SectionTitle = ({ ta = 'left', width, children }) => {
  return (
    <Title $ta={ta} $width={width}>
      {children}
    </Title>
  );
};

SectionTitle.propTypes = {
  ta: PropTypes.string,
  width: PropTypes.string,
};
