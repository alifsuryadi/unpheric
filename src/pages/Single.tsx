import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import fallenAngelCover from "../assets/images/single/unpheric-memories.jpg";
import { FaSpotify, FaYoutube, FaApple } from "react-icons/fa";

const Single = () => {
  const [activeSingle, setActiveSingle] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const singles = [
    {
      id: "fallen-angel",
      title: "Memories",
      cover: fallenAngelCover,
      description: "in the process of mixing | Coming Soon.",
      spotify: "#",
      apple: "#",
      youtube: "#",
      available: true,
    },
    {
      id: "neon-dreams",
      title: "Neon Dreams",
      cover: "💫",
      available: false,
    },
    {
      id: "void-echoes",
      title: "Void Echoes",
      cover: "🌌",
      available: false,
    },
  ];

  const visibleSingles = singles.filter((single) => single.available);

  // Card Animation
  useEffect(() => {
    gsap.fromTo(
      ".single-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
  }, []);

  // Modal Animation + Icon Stagger
  useEffect(() => {
    if (activeSingle && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        modalRef.current.querySelectorAll(".stream-icon"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, [activeSingle]);

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden">
      
      {/* Background Blur */}
      {activeSingle && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-300" />
      )}

      {/* Main Content */}
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          activeSingle ? "blur-sm scale-95" : ""
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Singles
          </h1>
          <p className="text-gray-400 text-xl">
            Explore the sonic journey through Unpheric's musical evolution
          </p>
        </div>

        {/* Grid */}
        <div
          className={`grid gap-8 justify-center ${
            visibleSingles.length === 1
              ? "grid-cols-1 max-w-md mx-auto"
              : visibleSingles.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleSingles.map((single) => (
            <div
              key={single.id}
              className="single-card cursor-pointer"
              onMouseEnter={() =>
                single.available && setActiveSingle(single)
              }
            >
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-600 transition-all duration-300">
                <div className="aspect-square p-8 flex flex-col justify-center items-center">
                  <img
                    src={single.cover}
                    alt={single.title}
                    className="rounded-xl shadow-2xl"
                  />

                  <h3 className="text-2xl font-bold text-center mt-6">
                    {single.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeSingle && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            onMouseLeave={() => setTimeout(() => setActiveSingle(null), 120)}
            className="relative bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl w-[90%] md:w-[70%] lg:w-[50%]"
          >
            <img
              src={activeSingle.cover}
              alt={activeSingle.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                {activeSingle.title}
              </h2>

              <p className="text-gray-300 mb-6">
                {activeSingle.description}
              </p>

              {/* STREAMING ICONS */}
              <div className="flex gap-6 mt-6">

                {/* SPOTIFY */}
                <a
                  href={activeSingle.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stream-icon group w-14 h-14 flex items-center justify-center rounded-full
                             bg-white/10 backdrop-blur-md border border-white/10
                             transition-all duration-300 hover:scale-110
                             hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]"
                >
                  <FaSpotify className="text-2xl text-green-400 transition-all duration-300 group-hover:text-green-300" />
                </a>

                {/* APPLE */}
                <a
                  href={activeSingle.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stream-icon group w-14 h-14 flex items-center justify-center rounded-full
                             bg-white/10 backdrop-blur-md border border-white/10
                             transition-all duration-300 hover:scale-110
                             hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]"
                >
                  <FaApple className="text-2xl text-white transition-all duration-300 group-hover:text-pink-300" />
                </a>

                {/* YOUTUBE */}
                <a
                  href={activeSingle.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stream-icon group w-14 h-14 flex items-center justify-center rounded-full
                             bg-white/10 backdrop-blur-md border border-white/10
                             transition-all duration-300 hover:scale-110
                             hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
                >
                  <FaYoutube className="text-2xl text-red-500 transition-all duration-300 group-hover:text-red-400" />
                </a>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Single;
