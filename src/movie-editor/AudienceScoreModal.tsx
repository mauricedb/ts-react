import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AudienceScoreModalContent from './AudienceScoreModalContent';

type AudienceScoreModalProps = {
  audienceScore: number;
  onSave: (score: number) => void;
};

const AudienceScoreModal = ({
  audienceScore,
  onSave
}: AudienceScoreModalProps) => {
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
        <AudienceScoreModalContent
          audienceScore={audienceScore}
          onSave={onSave}
          closeModal={() => setModalOpen(false)}
        />
      </Modal>
    </>
  );
};

export default AudienceScoreModal;
