import React, { useState } from 'react';
import { Modal, ModalContent } from './modal';

export const Image = ({ title, source }) => {
  const [isOpen, setIsopen] = useState(false);
  const showModal = () => setIsopen((prev) => !prev);

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <Modal onOpen={showModal}>
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={source} className="img-responsive" alt={title} />
        </Modal>
        {isOpen && (
          <ModalContent onClose={() => setIsopen(false)}>
            <img src={source} className="img-responsive" alt={title} />
          </ModalContent>
        )}
      </div>
    </div>
  );
};
