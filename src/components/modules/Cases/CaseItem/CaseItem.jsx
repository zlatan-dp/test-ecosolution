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

import CaseImg01 from 'img/cases/caseImg01.jpg';

export const CaseItem = () => {
  return (
    <CaseItemWrap>
      <ItemImgWrap>
        <ItemImg src={CaseImg01} />
      </ItemImgWrap>
      <ItemInfoWrap>
        <LocationWrap>
          <LocationName>
            Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
          </LocationName>
          <LocationBtn />
        </LocationWrap>
        <CaseNameWrap>
          <CaseNameText>Wind Power for auto field irrigation</CaseNameText>
          <CaseNameText>July 2023</CaseNameText>
        </CaseNameWrap>
      </ItemInfoWrap>
    </CaseItemWrap>
  );
};
