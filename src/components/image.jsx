import React from 'react';

export const Image = ({ index, title, src, onClick }) => {
  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="gallery-item" onClick={() => handleClickImage(index)}>
      <div className="hover-bg">
        <div className="hover-text">
          <h4>{title}</h4>
        </div>
        <img src={src} className="img-responsive" alt={title} />
      </div>
    </div>
  );
};
