import React, { useEffect, useState } from 'react';

const myModal = {
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
};

const myModalClose = {
  container: (isLaptop) => ({
    position: 'absolute',
    top: isLaptop ? '70' : '185',
    right: isLaptop ? '350' : '150',
    color: '#f1f1f1',
    fontSize: 50,
    fontWeight: 'bold',
    cursor: 'pointer',
  }),
};

const myModalContent = {
  display: 'flex',
  alignItems: 'center',
  width: '50%',
  height: '100%',
  margin: 'auto',
};

export const Modal = ({ onOpen, children }) => {
  return <div onClick={onOpen}> {children}</div>;
};

export const ModalContent = ({ onClose, children }) => {
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  return (
    <div style={myModal}>
      <span style={myModalClose.container(matches)} onClick={onClose}>
        &times;
      </span>
      <div style={myModalContent}>{children}</div>
    </div>
  );
};
