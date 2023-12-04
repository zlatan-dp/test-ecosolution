import PropTypes from 'prop-types';
import { PiArrowUpRight } from 'react-icons/pi';

import {
  CaseItemWrap,
  ItemImg,
  ItemImgWrap,
  ItemInfoWrap,
  LocationBtn,
  LocationName,
  LocationWrap,
  CaseNameWrap,
  CaseNameText,
} from './CaseItem.styled';

export const CaseItem = ({ img, location, name, date }) => {
  return (
    <CaseItemWrap>
      <ItemImgWrap>
        <ItemImg src={img} alt={name} />
      </ItemImgWrap>
      <ItemInfoWrap>
        <LocationWrap>
          <LocationName>{location}</LocationName>
          <LocationBtn>
            <PiArrowUpRight size={28} color={'currentColor'} />
          </LocationBtn>
        </LocationWrap>
        <CaseNameWrap>
          <CaseNameText>{name}</CaseNameText>
          <CaseNameText>{date}</CaseNameText>
        </CaseNameWrap>
      </ItemInfoWrap>
    </CaseItemWrap>
  );
};

CaseItem.propTypes = {
  caseData: PropTypes.shape({
    img: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
  }),
};
