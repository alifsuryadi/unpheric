import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SiSpotify,
  SiApplemusic,
  SiYoutube,
  SiAmazon,
  SiTidal,
  SiSoundcloud,
} from "react-icons/si";

import AmbientParticles from "../components/AmbientParticles";
import VinylPlayer from "../components/VinylPlayer";

import fallenAngelCover from "../assets/images/album/fallen-angel-v2.jpg";
import remnantCover from "../assets/images/album/remnant.jpg";

gsap.registerPlugin(ScrollTrigger);

const albumData: any = {
  "fallen-angel": {
    title: "Fallen Angel",
    artist: "UNPHERIC",
    cover: fallenAngelCover,
    glow: "#a855f7",
    description:
      "A dark emotional cinematic journey through atmospheric bass and haunting melodies.",
    spotifyEmbed:
      "https://open.spotify.com/embed/album/5RPA2cr6YCu4L3h4HVaD0D",
    streaming: {
      spotify: "https://open.spotify.com/album/5RPA2cr6YCu4L3h4HVaD0D",
      apple:
        "https://music.apple.com/id/album/fallen-angel-single/1814835031",
      youtube:
        "https://music.youtube.com/playlist?list=OLAK5uy_lVgbgwiKB53mVbzpVyB7XjzoCQAMI0lqU",
      amazon: "https://www.amazon.com/dp/B0F94CRF9X",
      tidal: "https://tidal.com/album/436386285",
      soundcloud: "https://soundcloud.com/unpheric/sets/fallen-angel",
    },
  },

  remnant: {
    title: "Remnant",
    artist: "UNPHERIC",
    cover: remnantCover,
    glow: "#38bdf8",
    description:
      "Fragments of memories echoing through a futuristic emotional soundscape.",
    spotifyEmbed: null,
    streaming: {},
  },
};

const platforms = [
  { name: "Spotify", icon: SiSpotify, key: "spotify" },
  { name: "Apple Music", icon: SiApplemusic, key: "apple" },
  { name: "YouTube Music", icon: SiYoutube, key: "youtube" },
  { name: "Amazon Music", icon: SiAmazon, key: "amazon" },
  { name: "Tidal", icon: SiTidal, key: "tidal" },
  { name: "SoundCloud", icon: SiSoundcloud, key: "soundcloud" },
];

const AlbumDetail = () => {
  const { id } = useParams();
  const album = albumData[id as keyof typeof albumData];

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(".album-cover-image", {
        scale: 1.05,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".album-cover-image", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".album-info",
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".vinyl-section",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".vinyl-section",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".spotify-section",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".spotify-section",
            start: "top 85%",
            onEnter: () => {
              gsap.to(".vinyl-disc", {
                rotation: 360,
                repeat: -1,
                duration: 4,
                ease: "linear",
              });
            },
          },
        }
      );

      gsap.fromTo(
        ".streaming-button",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".streaming-section",
            start: "top 85%",
          },
        }
      );

    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl text-unpheric-purple">Coming Soon</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-unpheric-black relative overflow-hidden">

      {/* HERO */}
      <section className="hero-section relative h-screen flex items-center justify-center text-center overflow-hidden">

        <img
          src={album.cover}
          alt={album.title}
          className="album-cover-image absolute top-0 left-0 w-full h-full object-cover opacity-40"
        />

        <AmbientParticles />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

        <div className="album-info relative z-10 px-4">

          <h1 className="text-6xl md:text-8xl font-bold text-gradient">
            {album.title}
          </h1>

          <p className="text-unpheric-gray text-2xl mt-4">
            {album.artist}
          </p>

          <p className="max-w-2xl mx-auto mt-6 text-unpheric-gray text-lg">
            {album.description}
          </p>

        </div>

      </section>

      {/* VINYL */}
      <section className="vinyl-section py-24 px-4 bg-unpheric-black text-center">

        <h2 className="text-3xl font-bold text-gradient mb-12">
          Now Playing
        </h2>

        <div className="vinyl-disc">
          <VinylPlayer cover={album.cover} />
        </div>

      </section>

      {/* SPOTIFY */}
      {album.spotifyEmbed && (
        <section className="spotify-section py-16 px-4 text-center">

          <h2 className="text-3xl font-bold text-gradient mb-10">
            Listen on Spotify
          </h2>

          <div
            className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-800"
            style={{
              boxShadow: `0 0 60px ${album.glow}`,
            }}
          >

            <iframe
              src={album.spotifyEmbed}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen"
              loading="lazy"
            ></iframe>

          </div>

        </section>
      )}

      {/* STREAMING */}
      <section className="streaming-section py-20 px-4 bg-gradient-to-t from-unpheric-purple/10 to-unpheric-black">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Listen Everywhere
          </h2>

          <p className="text-unpheric-gray text-xl mb-12">
            Available on all streaming platforms
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {platforms.map((platform) => {

              const Icon = platform.icon;
              const url = album.streaming?.[platform.key];

              if (!url) return null;

              return (
                <a
                  key={platform.name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="streaming-button opacity-100 group flex flex-col items-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-unpheric-purple transition-all duration-300 glow-purple-hover"
                >

                  <Icon className="w-8 h-8 mb-3 text-unpheric-gray group-hover:text-white transition-colors duration-300" />

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