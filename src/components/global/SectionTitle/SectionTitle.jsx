import { Title } from './SectionTitle.styled';
import PropTypes from 'prop-types';

export const SectionTitle = ({ ta = 'left', width, mb, children }) => {
  return (
    <Title $ta={ta} $width={width} $mb={mb}>
      {children}
    </Title>
  );
};

SectionTitle.propTypes = {
  ta: PropTypes.string,
  width: PropTypes.string,
  mb: PropTypes.string,
};
