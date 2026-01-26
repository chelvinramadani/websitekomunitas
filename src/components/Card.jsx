import { useState, useEffect } from "react";

const Card = ({ title, description, icon: Icon }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        group
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-3xl
        p-8
        shadow-xl
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-blue-400/60
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Icon */}
      {Icon && (
        <div
          className="
            w-14 h-14 mb-5 rounded-2xl
            flex items-center justify-center
            bg-blue-500/15 text-blue-400
            transition-all duration-300
            group-hover:bg-blue-500/25
            group-hover:scale-110
          "
        >
          <Icon size={28} />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-extrabold mb-3 leading-snug text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed text-white">
        {description}
      </p>
    </div>
  );
};

export default Card;