import React, { useState, ReactElement } from 'react';
import { Modal } from 'react-bootstrap';

type AudienceScoreModalProps = {
  children: ReactElement;
};

const AudienceScoreModal = ({ children }: AudienceScoreModalProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-outline-secondary"
      >
        📖
      </button>

      <Modal keyboard={false} show={isModalOpen}>
        {React.cloneElement(children, {
          closeModal: () => setModalOpen(false)
        })}
      </Modal>
    </>
  );
};

export default AudienceScoreModal;
