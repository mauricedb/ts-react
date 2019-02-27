import React, { useState, ReactElement, ButtonHTMLAttributes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import classNames from 'classnames';

type ModalButtonProps = {
  label: string;
  children: ReactElement;
};

const ModalButton = ({
  children,
  label,
  className,
  ...props
}: ModalButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline-secondary"
        className={className}
        onClick={() => setModalOpen(true)}
      >
        {label}
      </Button>

      <Modal keyboard={false} show={isModalOpen}>
        {React.cloneElement(children, {
          closeModal: () => setModalOpen(false)
        })}
      </Modal>
    </>
  );
};

export default ModalButton;
