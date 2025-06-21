import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

import {
  SiSpotify,
  SiApplemusic,
  SiYoutube,
  SiAmazon,
  SiTidal,
  SiSoundcloud,
} from "react-icons/si";

import fallenAngelCover from "../assets/images/album/fallen-angel.jpg";

gsap.registerPlugin(ScrollTrigger);

const AlbumDetail = () => {
  const { id } = useParams();
  const coverRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const streamingLinks = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/album/0ji0ydzv8F1rJCXeH6we2X?si=5yqgS9q5R2WW-PYil1_QeQ&nd=1&dlsi=f1179ffa5e4c404b",
      color: "#1DB954",
      icon: SiSpotify,
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/id/album/fallen-angel-single/1814835031",
      color: "#FA243C",
      icon: SiApplemusic,
    },
    {
      name: "YouTube Music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_lVgbgwiKB53mVbzpVyB7XjzoCQAMI0lqU",
      color: "#FF0000",
      icon: SiYoutube,
    },
    {
      name: "Amazon Music",
      url: "https://www.amazon.com/dp/B0F94CRF9X?tag=fndcmpgns-20",
      color: "#FF9900",
      icon: SiAmazon,
    },
    {
      name: "Tidal",
      url: "https://tidal.com/album/436386285",
      color: "#00FFFF",
      icon: SiTidal,
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/unpheric/sets/fallen-angel?si=b43f7fcd83984f26b364ea4843f7c3b0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      color: "#FF3300",
      icon: SiSoundcloud,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- ANIMASI BARU: Efek membesar-mengecil (breathing) ---
      gsap.to(".album-cover-image", {
        scale: 1.05, // Membesar 5%
        duration: 5, // Durasi 5 detik untuk satu siklus
        repeat: -1, // Mengulang tanpa henti
        yoyo: true, // Kembali ke ukuran semula (mengecil)
        ease: "power1.inOut", // Gerakan animasi yang halus
      });

      // Efek Parallax untuk cover art (menargetkan gambar yang sama)
      gsap.to(".album-cover-image", {
        yPercent: -20, // Bergerak ke atas sebesar 20% dari tingginya
        ease: "none",
        scrollTrigger: {
          trigger: coverRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animasi teks cerita
      gsap.fromTo(
        ".story-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animasi tombol streaming
      gsap.fromTo(
        ".streaming-button",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".streaming-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  if (id !== "fallen-angel") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-unpheric-purple mb-4">
            Coming Soon
          </h1>
          <p className="text-unpheric-gray">This album is not yet available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-unpheric-black">
      {/* Hero Section with Cover Art - Strukturnya diperbaiki */}
      <section
        ref={coverRef}
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Gambar cover sebagai latar, target untuk semua animasi */}
        <img
          src={fallenAngelCover}
          alt="Fallen Angel Album Cover"
          className="album-cover-image absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Lapisan gradien untuk memastikan teks mudah dibaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-unpheric-black/60 to-unpheric-black"></div>

        {/* Konten teks di atas lapisan gradien */}
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient">
            Fallen Angel
          </h1>
          <p className="text-unpheric-gray text-2xl mt-4">UNPHERIC</p>
        </div>
      </section>

      {/* Album Story */}
      <section ref={storyRef} className="py-20 px-4 bg-unpheric-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
            The Story
          </h2>
          <div className="story-text space-y-8 text-lg md:text-xl leading-relaxed text-unpheric-gray">
            <p>
              "Fallen Angel" is a sonic descent into the heart of a broken
              paradise. It tells the story of a once-pure angel cast down into
              the depths of sin—a realm of chaos and distortion. At first, there
              is a cry for salvation, a haunting echo in the void, but no answer
              comes.
            </p>
            <p>
              The angel, left alone in the noise, begins to adapt. The sharp,
              gritty layers of dubstep reflect the clash between what remains of
              purity and the corruption that surrounds it, while faint,
              melancholic melodies whisper memories of what once was.
            </p>
            <p>
              As the album unfolds, the angel's identity fades—no longer
              reaching for the light, but becoming something else entirely: a
              creature of the dark, reborn in the ruins.
            </p>
          </div>
        </div>
      </section>

      {/* Get It Now Section */}
      <section className="streaming-section py-20 px-4 bg-gradient-to-t from-unpheric-purple/10 to-unpheric-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get It Now
          </h2>
          <p className="text-unpheric-gray text-xl mb-12">
            Stream "Fallen Angel" on your favorite platform
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {streamingLinks.map((platform) => {
              // 3. Simpan komponen ikon ke dalam variabel
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="streaming-button group flex flex-col items-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-unpheric-purple transition-all duration-300 glow-purple-hover"
                >
                  {/* 4. Ganti ikon ExternalLink dengan ikon platform yang sesuai */}
                  <IconComponent className="w-8 h-8 mb-3 text-unpheric-gray group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm text-center text-unpheric-white group-hover:text-unpheric-purple transition-colors duration-300">
                    {platform.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlbumDetail;
