import { About } from './modules/About/About';
import { Cases } from './modules/Cases/Cases';
import { Electricity } from './modules/Electricity/Electricity';
import { Header } from './modules/Header/Header';
import { Hero } from './modules/Hero/Hero';
import { Faq } from './modules/Faq/Faq';
import { ContactUs } from './modules/ContactUs/ContactUs';
import { Footer } from './modules/Footer/Footer';
import { Modal } from './global/Modal/Modal';
import { useState } from 'react';
import { BurgerMenu } from './modules/BurgerMenu/BurgerMenu';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <BurgerMenu toggleModal={toggleModal} />
        </Modal>
      )}

      <Header toggleModal={toggleModal} />
      <Hero />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
};
