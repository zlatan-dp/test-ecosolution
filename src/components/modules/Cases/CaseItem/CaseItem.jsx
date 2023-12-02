import PropTypes from 'prop-types';

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

// import imgage from 'img/cases/caseImg01.jpg';

export const CaseItem = ({ img, location, name, date }) => {
  return (
    <CaseItemWrap>
      <ItemImgWrap>
        <ItemImg src={img} />
      </ItemImgWrap>
      <ItemInfoWrap>
        <LocationWrap>
          <LocationName>{location}</LocationName>
          <LocationBtn />
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
