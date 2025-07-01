import React, { useEffect, useState } from 'react';
import '../style.css';

const StatBox = ({ label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 10);
    
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatNumber = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
    return `${num}+`;
  };

  return (
    <div className="stat-box">
      <h2 className="stat-count">{formatNumber(count)}</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <StatBox label="Member Aktif" target={10000} />
        <StatBox label="Event Bulanan" target={50} />
        <StatBox label="Mentor Profesional" target={100} />
        <StatBox label="Diskusi Mingguan" target={5000} />
      </div>
    </section>
  );
};

export default Stats;
