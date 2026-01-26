import {
  Code2,
  Users,
  Presentation,
  GitBranch,
  ScrollText,
  Laugh,
  Bot,
} from "lucide-react";

import Card from "./Card";

const Kegiatan = () => {
  return (
    <section
      id="kegiatan"
      className="relative py-24 px-6 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="
            text-3xl md:text-4xl font-extrabold text-center mb-16
            text-white leading-snug">
          Kegiatan Komunitas
        </h2>

        {/* Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Belajar Bareng"
            description="Belajar ngoding tanpa tekanan dengan bimbingan para sepuh."
            icon={Code2}
          />
          <Card
            title="Sharing Session"
            description="Diskusi dan berbagi pengalaman seputar ngoding tanpa tekanan."
            icon={Users}
          />
          <Card
            title="Showcase Project"
            description="Pamerkan hasil karya atau pencapaian project buatanmu."
            icon={Presentation}
          />
          <Card
            title="Proyek Kolaboratif"
            description="Buat proyek bareng tanpa deadline yang bikin stres."
            icon={GitBranch}
          />
          <Card
            title="Scroll Fesnuk"
            description="Solusi hiburan santai di saat malas ngoding."
            icon={ScrollText}
          />
          <Card
            title="Bikin Meme Programming"
            description="Bagikan atau buat meme lucu seputar dunia programmer."
            icon={Laugh}
          />
          <Card
            title="Ngoding Pakai AI"
            description="Manfaatkan AI untuk mempercepat coding tanpa capek mikir."
            icon={Bot}
          />
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;