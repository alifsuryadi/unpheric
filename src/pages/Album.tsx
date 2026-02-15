import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import fallenAngelCover from "../assets/images/album/fallen-angel-v2.jpg";

const Album = () => {
  const albums = [
    {
      id: "fallen-angel",
      title: "Fallen Angel",
      cover: fallenAngelCover,
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

  // ✅ Filter hanya album yang sudah rilis
  const visibleAlbums = albums.filter((album) => album.available);

  useEffect(() => {
    gsap.fromTo(
      ".album-grid",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );

    gsap.fromTo(
      ".album-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.6,
      }
    );
  }, []);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Album
          </h1>
          <p className="text-unpheric-gray text-xl">
            Explore the sonic journey through Unpheric's musical evolution
          </p>
        </div>

        {/* Albums Grid */}
        <div
          className={`album-grid grid gap-8 
          ${
            visibleAlbums.length === 1
              ? "grid-cols-1 justify-items-center max-w-md mx-auto"
              : visibleAlbums.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleAlbums.map((album) => (
            <div key={album.id} className="album-card group w-full">
              <Link
                to={`/album/${album.id}`}
                className="block relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-unpheric-purple transition-all duration-500 glow-purple-hover"
              >
                <div className="aspect-square p-8 flex flex-col justify-center items-center">
                  <img
                    src={album.cover}
                    alt={`${album.title} Album Cover`}
                    className="w-full h-full object-cover rounded-xl shadow-2xl mb-6"
                  />
                  <h3 className="text-2xl font-bold text-center group-hover:text-unpheric-purple transition-colors duration-300">
                    {album.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-unpheric-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
