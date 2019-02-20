import React, { useState, ReactElement } from 'react';
import { Modal } from 'react-bootstrap';

type ModalButtonProps = {
  label: string;
  children: ReactElement;
};

const ModalButton = ({ children, label }: ModalButtonProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-outline-secondary"
      >
        {label}
      </button>

      <Modal keyboard={false} show={isModalOpen}>
        {React.cloneElement(children, {
          closeModal: () => setModalOpen(false)
        })}
      </Modal>
    </>
  );
};

export default ModalButton;
