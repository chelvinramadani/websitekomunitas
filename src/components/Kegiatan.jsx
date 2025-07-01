import React from 'react';
import Card from './Card'; // pastikan path sesuai
import sampleImg from '../assets/banner.png';
import imgScroll from '../assets/scroll.jpg';

const Kegiatan = () => {
  return (
    <section id="kegiatan" className="card-section">
      <h2 className="section-title">Kegiatan Komunitas</h2>
      <div className="card-list">
        <Card 
          title="Forum Diskusi"
          description="Tempat berdiskusi seputar ngoding tanpa tekanan."
          image={sampleImg}
        />
        <Card 
          title="Showcase Project"
          description="Tempat untuk showcase atau pamer pencapaian project buatanmu"
          image={sampleImg}
        />
        <Card 
          title="Proyek Kolaboratif"
          description="Buat proyek bareng tanpa deadline yang bikin stres."
          image={sampleImg}
        />
        <Card 
          title="Scroll Fesnuk"
          description="Solusi kalo stress dan malas ngoding ya scroll facebook"
          image={imgScroll}
        />
        <Card 
          title="Bikin Meme Programming"
          description="Bebaskan kreativitasmu dengan membuat meme receh nan relate."
          image={sampleImg}
        />
        <Card 
          title="Ngoding Pakai AI"
          description="Ngoding tanpa mikir? Serahkan saja ke AI."
          image={sampleImg}
        />
      </div>
    </section>
  );
};

export default Kegiatan;
