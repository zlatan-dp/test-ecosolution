import styled from 'styled-components';

// export const SwiperWrap = styled.div`
//   padding-top: 88px;
// `;

export const SwiperBtnWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  gap: 12px;
`;

export const SwiperBtn = styled.div`
  width: 66px;
  height: 66px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid ${p => p.theme.colors.mainCol};
  border-radius: 50%;
  color: ${p => p.theme.colors.mainCol};

  &:hover {
    border: 1px solid ${p => p.theme.colors.acCol};
    color: ${p => p.theme.colors.acCol};
  }
`;
