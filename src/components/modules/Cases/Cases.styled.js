import styled from 'styled-components';

export const CasesBox = styled.div`
  position: relative;
`;

export const SwiperCustomWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 4;
  display: flex;
  align-items: end;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 50%;
    top: 8px;
    border-left: 1px solid ${p => p.theme.colors.acCol};
    padding-left: 8px;
  }
  @media (min-width: 1280px) {
    padding-left: 161px;
  }
`;

export const SwiperBtnWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const SwiperBtn = styled.button`
  width: 66px;
  height: 66px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid ${p => p.theme.colors.mainCol};
  border-radius: 50%;
  color: ${p => p.theme.colors.mainCol};
  background-color: ${p => p.theme.colors.white};
  transition: var(--transition-border), var(--transition-color);

  &:hover {
    border: 1px solid ${p => p.theme.colors.acCol};
    color: ${p => p.theme.colors.acCol};
  }

  @media (min-width: 1280px) {
    width: 84px;
    height: 84px;
  }
`;

export const PaginationWrap = styled.div`
  color: hsla(164, 45%, 16%, 0.25);
  font-family: 'Fira Sans';
  font-size: 28px;
  font-weight: 300;
  /* .swiper-pagination-custom {
  } */

  .my-current-class {
    color: var(--main-color);
  }

  .my-total-class {
    /* Стилізація для всього чисельника фракції */
  }
`;
