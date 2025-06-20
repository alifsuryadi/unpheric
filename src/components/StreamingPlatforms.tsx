import React from "react";

const StreamingPlatforms = () => {
  const platforms = [
    {
      name: "Spotify",
      logo: "🎵",
      url: "https://open.spotify.com/artist/1gfwehyaOnHFFbuVGKrszq",
      color: "#1DB954",
    },
    {
      name: "Apple Music",
      logo: "🍎",
      url: "https://music.apple.com/id/artist/unpheric/1787597554",
      color: "#FA243C",
    },
    {
      name: "YouTube Music",
      logo: "📺",
      url: "https://music.youtube.com/channel/UCwi0xjIF9gyZD5KYctESW7Q",
      color: "#FF0000",
    },
    {
      name: "Amazon Music",
      logo: "📦",
      url: "https://www.amazon.com/music/player/artists/B0DRPVZCPZ/unpheric",
      color: "#FF9900",
    },
    {
      name: "Tidal",
      logo: "🌊",
      url: "https://tidal.com/artist/52866092",
      color: "#00FFFF",
    },
    {
      name: "SoundCloud",
      logo: "☁️",
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
          {platforms.map((platform, index) => (
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
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {platform.logo}
              </div>
              <span className="text-sm text-center text-unpheric-white group-hover:text-unpheric-purple transition-colors duration-300">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingPlatforms;
