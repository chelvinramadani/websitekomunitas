import React, { useState, useEffect } from 'react';
import '../style.css';

const Join = ({ title, requirements, steps, buttonText, buttonLink }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    members: 0,
    events: 0,
    mentors: 0,
    discussions: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    const targets = {
      members: 200000,
      events: 50,
      mentors: 100,
      discussions: 5000,
    };

    const duration = 2000;
    const steps = 30;
    const interval = duration / steps;

    let step = 0;
    const counting = setInterval(() => {
      step++;
      setStats({
        members: Math.min(Math.floor((targets.members / steps) * step), targets.members),
        events: Math.min(Math.floor((targets.events / steps) * step), targets.events),
        mentors: Math.min(Math.floor((targets.mentors / steps) * step), targets.mentors),
        discussions: Math.min(Math.floor((targets.discussions / steps) * step), targets.discussions),
      });
      if (step === steps) clearInterval(counting);
    }, interval);

    return () => clearInterval(counting);
  }, []);

  const format = (num) => (num >= 1000 ? `${Math.floor(num / 1000)}K+` : `${num}+`);

  const benefits = [
    { title: 'Networking Santai', description: 'Kenalan dengan calon programmer santai.' },
    { title: 'Belajar Bareng', description: 'Diskusi ringan dan belajar tanpa tekanan.' },
    { title: 'Inspirasi Project', description: 'Dapat ide project seru dari teman komunitas.' },
    { title: 'Meme Eksklusif', description: 'Akses meme ngoding kaum rebahan.' },
  ];

  return (
    <section className={`join-section ${isVisible ? 'join-visible' : ''}`} id="join">
      <div className="join-container">
        <h2 className="join-title">{title}</h2>

        {/* Stats */}
        <div className="stats-row-plain">
          <div>
            <h3>{format(stats.members)}</h3>
            <p>Member Aktif</p>
          </div>
          <div>
            <h3>{format(stats.events)}</h3>
            <p>Event Bulanan</p>
          </div>
          <div>
            <h3>{format(stats.mentors)}</h3>
            <p>Mentor Profesional</p>
          </div>
          <div>
            <h3>{format(stats.discussions)}</h3>
            <p>Diskusi Mingguan</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Join Info (Single Column) */}
        <div className="join-info-center">
          <div className="join-box full">
            <h3>Syarat Bergabung</h3>
            <ul>
              {requirements.map((req, i) => <li key={i}>{req}</li>)}
            </ul>

            <h3 style={{ marginTop: '2rem' }}>Cara Bergabung</h3>
            <ol>
              {steps.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>
        </div>

        {/* CTA */}
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
