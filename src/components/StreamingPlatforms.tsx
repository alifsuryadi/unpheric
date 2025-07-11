// src/components/StreamingPlatforms.tsx

import React from "react";
// 1. Import ikon dari pustaka react-icons/si (Simple Icons)
import {
  SiSpotify,
  SiApplemusic,
  SiYoutube,
  SiAmazon,
  SiTidal,
  SiSoundcloud,
} from "react-icons/si";

const StreamingPlatforms = () => {
  // 2. Ganti properti logo dari emoji menjadi komponen ikon
  const platforms = [
    {
      name: "Spotify",
      logo: SiSpotify, // Menggunakan komponen ikon
      url: "https://open.spotify.com/artist/1gfwehyaOnHFFbuVGKrszq",
      color: "#1DB954",
    },
    {
      name: "Apple Music",
      logo: SiApplemusic, // Menggunakan komponen ikon
      url: "https://music.apple.com/id/artist/unpheric/1787597554",
      color: "#FA243C",
    },
    {
      name: "YouTube Music",
      logo: SiYoutube, // Menggunakan komponen ikon
      url: "https://music.youtube.com/channel/UCwi0xjIF9gyZD5KYctESW7Q",
      color: "#FF0000",
    },
    {
      name: "Amazon Music",
      logo: SiAmazon, // Menggunakan komponen ikon
      url: "https://www.amazon.com/music/player/artists/B0DRPVZCPZ/unpheric",
      color: "#FF9900",
    },
    {
      name: "Tidal",
      logo: SiTidal, // Menggunakan komponen ikon
      url: "https://tidal.com/artist/52866092",
      color: "#00FFFF",
    },
    {
      name: "SoundCloud",
      logo: SiSoundcloud, // Menggunakan komponen ikon
      url: "https://soundcloud.com/unpheric",
      color: "#FF3300",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Listen Now
          </h2>
          <p className="text-unpheric-gray text-lg">
            Stream Unpheric's music on your favorite platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform, index) => {
            // 3. Render komponen ikon yang disimpan di properti 'logo'
            const LogoComponent = platform.logo;

            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-unpheric-purple transition-all duration-300 glow-purple-hover"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* 4. Tampilkan logo dengan styling yang sesuai */}
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  <LogoComponent className="w-10 h-10 text-unpheric-gray group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-center text-unpheric-white group-hover:text-unpheric-purple transition-colors duration-300">
                  {platform.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StreamingPlatforms;
