import { Container } from 'components/global/Container/Container';
import { Section } from 'components/global/Section/Section';
import { SectionTitle } from 'components/global/SectionTitle/SectionTitle';
import { CaseItem } from './CaseItem/CaseItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { PiArrowRightLight, PiArrowLeftLight } from 'react-icons/pi';

import casesData from 'components/modules/Cases/data';

import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.css';

import {
  SwiperBtn,
  SwiperBtnWrap,
  PaginationWrap,
  SwiperCustomWrap,
  CasesBox,
} from './Cases.styled';

export const Cases = () => {
  const navigationOptions = {
    nextEl: '.swiper-button-n',
    prevEl: '.swiper-button-p',
  };
  return (
    <Section id={'cases'}>
      <Container>
        <CasesBox>
          <SectionTitle width={'264px'}>
            Successful cases of our company
          </SectionTitle>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              el: '.swiper-pagination-custom', //
              type: 'custom',
              renderCustom: function (swiper, current, total) {
                return (
                  '<span class="my-current-class">' +
                  current +
                  '</span>' +
                  ' / ' +
                  '<span class="my-total-class">' +
                  total +
                  '</span>'
                );
              },
            }}
            navigation={navigationOptions}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {casesData.map(({ id, img, location, name, date }) => (
              <SwiperSlide key={id}>
                <CaseItem
                  img={img}
                  location={location}
                  name={name}
                  date={date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperCustomWrap>
            <PaginationWrap className="swiper-pagination-custom" />
            <SwiperBtnWrap>
              <SwiperBtn className="swiper-button-p">
                <PiArrowLeftLight size={36} color="currentColor" />
              </SwiperBtn>
              <SwiperBtn className="swiper-button-n">
                <PiArrowRightLight size={36} color="currentColor" />
              </SwiperBtn>
            </SwiperBtnWrap>
          </SwiperCustomWrap>
        </CasesBox>
      </Container>
    </Section>
  );
};

// export const Cases = () => {
//   const navigationOptions = {
//     nextEl: '.swiper-button-n',
//     prevEl: '.swiper-button-p',
//   };
//   return (
//     <Section id={'cases'}>
//       <Container>
//         <SectionTitle width={'264px'}>
//           Successful cases of our company
//         </SectionTitle>

//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           loop={true}
//           pagination={{
//             type: 'fraction',
//           }}
//           navigation={navigationOptions}
//           modules={[Pagination, Navigation]}
//           className="mySwiper"
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//             },
//           }}
//         >
//           {casesData.map(({ id, img, location, name, date }) => (
//             <SwiperSlide key={id}>
//               <CaseItem img={img} location={location} name={name} date={date} />
//             </SwiperSlide>
//           ))}

//           <SwiperBtnWrap>
//             <SwiperBtn className="swiper-button-p">
//               <PiArrowLeftLight size={36} color="currentColor" />
//             </SwiperBtn>
//             <SwiperBtn className="swiper-button-n">
//               <PiArrowRightLight size={36} color="currentColor" />
//             </SwiperBtn>
//           </SwiperBtnWrap>
//         </Swiper>
//       </Container>
//     </Section>
//   );
// };
