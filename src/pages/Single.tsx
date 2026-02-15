import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import fallenAngelCover from "../assets/images/single/unpheric-memories.jpg";

const Single = () => {
  const [activeSingle, setActiveSingle] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const singles = [
    {
      id: "fallen-angel",
      title: "Memories",
      cover: fallenAngelCover,
      description:
        "in the process of mixing | Coming Soon.",
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

  useEffect(() => {
    gsap.fromTo(
      ".single-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
  }, []);

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
    }
  }, [activeSingle]);

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Dark Blur Background */}
      {activeSingle && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 pointer-events-none transition-all duration-300" />
      )}

      {/* Main Content */}
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          activeSingle ? "blur-sm scale-95" : ""
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Singles
          </h1>
          <p className="text-unpheric-gray text-xl">
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
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-unpheric-purple transition-all duration-300">
                <div className="aspect-square p-8 flex flex-col justify-center items-center">
                  {single.available ? (
                    <img
                      src={single.cover}
                      alt={single.title}
                      className="rounded-xl shadow-2xl"
                    />
                  ) : (
                    <div className="text-8xl opacity-50">
                      {single.cover}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-center mt-6">
                    {single.title}
                  </h3>

                  {!single.available && (
                    <p className="text-sm text-unpheric-gray mt-2">
                      Coming Soon
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NETFLIX STYLE MODAL */}
      {activeSingle && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            onMouseLeave={() => {
              setTimeout(() => {
                setActiveSingle(null);
              }, 120);
            }}
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

              <div className="flex gap-4">
                <a
                  href={activeSingle.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-green-500 rounded-full text-black font-semibold hover:scale-105 transition"
                >
                  Spotify
                </a>

                <a
                  href={activeSingle.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-pink-500 rounded-full text-black font-semibold hover:scale-105 transition"
                >
                  Apple Music
                </a>

                <a
                  href={activeSingle.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-red-500 rounded-full text-black font-semibold hover:scale-105 transition"
                >
                  YouTube
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
