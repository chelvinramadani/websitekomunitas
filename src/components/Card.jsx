import React, { useState, useEffect } from 'react';
import '../style.css';

const Card = ({ title, description, image, imageHeight = '180px' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`card ${visible ? 'card-visible' : ''}`}>
      {image && (
        <img
          src={image}
          alt={title}
          className="card-image"
          style={{ height: imageHeight }}
        />
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
