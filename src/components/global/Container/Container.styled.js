import styled from 'styled-components';

export const ContainerBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  min-width: 360px;
  width: 100%;
  /* background-color: red; */
  @media (min-width: 480px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
