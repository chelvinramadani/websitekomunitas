import React from 'react';

const Join = ({ title, requirements, steps, buttonText, buttonLink }) => {
  return (
    <section className="join-section" id="join">
      <div className="join-container">
        <h2 className="join-title">{title}</h2>
        
        <div className="join-content">
          <div className="join-box">
            <h3>Syarat Bergabung</h3>
            <ul>
              {requirements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="join-box">
            <h3>Cara Bergabung</h3>
            <ol>
              {steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <a 
          href={buttonLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="join-button"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Join;
