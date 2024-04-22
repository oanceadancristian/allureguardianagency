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
  container: (isMobile) => ({
    position: 'absolute',
    top: isMobile ? '185' : '70',
    right: isMobile ? '150' : '350',
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
  const mediaMatch = window.matchMedia('(max-width: 768px)');
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
