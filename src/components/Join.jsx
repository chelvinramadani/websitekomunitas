import { useState, useEffect } from "react";
import { Users, Code2, Lightbulb, Laugh } from "lucide-react";
import Card from "./Card";

const Join = ({
  title = "Gabung dengan IMPHNEN",
  requirements = [
    "Tidak sedang dikejar deadline",
    "Menyukai diskusi ringan seputar pemrograman",
    "Siap ngoding saat mood datang",
  ],
  steps = [
    "Kunjungi grup Facebook IMPHNEN",
    'Klik tombol "Gabung Grup"',
    "Jawab pertanyaan santai dari admin 😎",
  ],
  buttonText = "Gabung Sekarang di Facebook 🚀",
  buttonLink = "https://facebook.com/groups/imphnen",
}) => {
  const [stats, setStats] = useState({
    members: 0,
    events: 0,
    mentors: 0,
    discussions: 0,
  });

  useEffect(() => {
    const targets = {
      members: 200000,
      events: 50,
      mentors: 100,
      discussions: 5000,
    };

    const duration = 1800;
    const totalSteps = 30;
    const interval = duration / totalSteps;

    let step = 0;
    const counter = setInterval(() => {
      step++;

      setStats({
        members: Math.min(
          Math.floor((targets.members / totalSteps) * step),
          targets.members
        ),
        events: Math.min(
          Math.floor((targets.events / totalSteps) * step),
          targets.events
        ),
        mentors: Math.min(
          Math.floor((targets.mentors / totalSteps) * step),
          targets.mentors
        ),
        discussions: Math.min(
          Math.floor((targets.discussions / totalSteps) * step),
          targets.discussions
        ),
      });

      if (step === totalSteps) clearInterval(counter);
    }, interval);

    return () => clearInterval(counter);
  }, []);

  const format = (num) => {
    if (num >= 1_000_000) return `${Math.floor(num / 1_000_000)}M+`;
    if (num >= 1_000) return `${Math.floor(num / 1_000)}K+`;
    return `${num}+`;
  };

  const benefits = [
    {
      title: "Relasi & Networking",
      description: "Bertemu dengan orang-orang yang punya minat dan visi sama",
      icon: Users,
    },
    {
      title: "Lingkungan Positif",
      description: "Diskusi ringan dan belajar dalam suasana santai tanpa tekanan.",
      icon: Code2,
    },
    {
      title: "Inspirasi Project",
      description: "Dapat ide project seru dari teman komunitas.",
      icon: Lightbulb,
    },
    {
      title: "Meme Eksklusif",
      description: "Akses meme dunia programmer.",
      icon: Laugh,
    },
  ];

  return (
    <section
      id="join"
      className="relative py-24 px-6 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Title */}
        <h2
          className="
            text-3xl md:text-4xl font-extrabold text-center mb-16
            text-white leading-snug">
          {title}
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Member Aktif", value: stats.members },
            { label: "Event Bulanan", value: stats.events },
            { label: "Mentor Profesional", value: stats.mentors },
            { label: "Diskusi Mingguan", value: stats.discussions },
          ].map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl bg-white/10 backdrop-blur-md
                border border-white/10
                py-8 transition
                hover:-translate-y-1 hover:bg-white/15
              "
            >
              <h3 className="text-2xl font-extrabold">
                {format(item.value)}
              </h3>
              <p className="mt-2 text-sm text-blue-200">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-24">
          {benefits.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Join Info */}
        <div
          className="
            max-w-4xl mx-auto
            bg-white/10 backdrop-blur-md
            border border-white/10
            rounded-3xl p-10 mb-16
            text-left
          "
        >
          <h3 className="text-xl font-extrabold mb-4">
            Syarat Bergabung
          </h3>
          <ul className="list-disc list-inside text-blue-100 space-y-2">
            {requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>

          <h3 className="text-xl font-extrabold mt-10 mb-4">
            Cara Bergabung
          </h3>
          <ol className="list-decimal list-inside text-blue-100 space-y-2">
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            px-10 py-4 rounded-xl
            font-semibold
            bg-gradient-to-r from-blue-500 to-blue-600
            hover:from-blue-400 hover:to-blue-500
            transition shadow-lg hover:shadow-xl
          "
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Join;