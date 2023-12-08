import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContent, ModalWrap } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const backdropClik = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={backdropClik}>
      <ModalWrap onClick={backdropClik}>
        <ModalContent>{children}</ModalContent>
      </ModalWrap>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func,
};
