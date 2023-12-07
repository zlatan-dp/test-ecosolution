import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 36px 0;
  background-color: rgba(23, 59, 49, 0.25);
  backdrop-filter: blur(2px);
`;

export const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  margin: 0 auto;
  @media (min-width: 480px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding: 0px 30px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0px 20px;
  }
`;

export const ModalContent = styled.div`
  border-radius: 25px;
  width: 320px;
  padding: 24px;
  margin-left: auto;
  height: 100%;
  background-color: rgba(23, 59, 49, 0.75);
`;
