import React from 'react';
import * as ModalComponent from 'react-modal';

// import { Container } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface ModalProps {
  title: string,
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  closeModal,
}) => {
  return (
    <ModalComponent
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={title}
    >
      {children}
    </ModalComponent>
  );
}

export default Modal;