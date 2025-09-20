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

import fallenAngelCover from "../assets/images/album/fallen-angel-v2.jpg";

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
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
            A Dark Fantasy Tale
          </h2>

          <div className="story-text space-y-12">
            {/* Fallen Angel */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="https://open.spotify.com/track/2YCXXmboy3jzhTrY5t11wT?si=a66788dc5a2e40ed"
                  className="relative inline-block group text-unpheric-purple"
                >
                  Fallen Angel
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unpheric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                There was once a young angel, a woman, who lived happily in her
                world. She was enjoying herself without worries, surrounded by
                light and joy. But in an instant, everything changed. She fell
                into a strange place she had never seen before. It was
                unfamiliar, dark, and confusing. She felt lost, afraid, and
                unable to understand what had just happened.
              </p>
            </div>

            {/* Forgotten Path */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="https://open.spotify.com/track/1NMCLJDyTJDPWRB3VUnPHU?si=16558f1551ee4e0a"
                  className="relative inline-block group text-unpheric-purple"
                >
                  Forgotten Path
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unpheric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                After the fall, the angel tried to search for the roads and
                paths she had once walked. She hoped that if she followed them,
                she could find her way back home. But to her shock, they had all
                vanished. The memories of her path back home were gone. No
                matter how hard she tried, she could not recall them.
              </p>
            </div>

            {/* Grace in Shadow */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="https://open.spotify.com/track/2MolaazgPCclT0ap0VKpiw?si=e29055a207224853"
                  className="relative inline-block group text-unpheric-purple"
                >
                  Grace in Shadow
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unpheric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                Then, something began to grow inside her. It was grace, but not
                the holy and pure grace she had once known. This was different.
                Slowly, it started to change her. She began to lose her true
                self, and the shadows of darkness surrounded her, threatening to
                take away who she was.
              </p>
            </div>

            {/* Beneath Silence */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="https://open.spotify.com/track/3Vh0BhVF2BjGiYpciYpp8r?si=bdd63f472c8041e9"
                  className="relative inline-block group text-unpheric-purple"
                >
                  Beneath Silence
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unpheric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                The angel stopped. She chose silence. In the quiet, she tried to
                calm herself and understand her situation. She asked herself
                "Who am I? What have I done? Why did I fall here? What can I do
                to change this?" In that moment of deep reflection, the shadow
                that had almost taken over her body suddenly disappeared.
              </p>
            </div>

            {/* Unknown Dread */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="https://open.spotify.com/track/5j3NDFOKwOeJaTcxontqA0?si=abce0718ef164dd0"
                  className="relative inline-block group text-unpheric-purple"
                >
                  Unknown Dread
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unpheric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                This was the climax of her journey. Free from the shadow, she
                tried to run and fly toward an exit. With some of her memories
                returning, she soared higher and higher, crossing the strange
                land, until she finally saw a way out.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                But just before she reached it, she was stopped by a terrifying
                figure, an "unknown dread." It was unrecognizable, shapeless,
                but its presence alone filled her with fear. Still, the angel
                refused to give up. The way out was right in front of her. She
                fought with all her strength, but the unknown dread was
                impossible to overcome.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                In the middle of the battle, she suddenly understood. Her eyes
                opened fully, and her memories returned. Before coming to this
                place, she had lived carelessly. She had enjoyed herself in the
                wrong way, feeding her worst traits until they went too far.
                That was why she had fallen into the world of her own
                subconscious.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                The unknown dread was no stranger. It was her dark side,
                separated from her heart, standing against her. She realized
                then: no matter how much she fought, she would never win. The
                only way to escape was to truly change—to become the angel she
                was meant to be: kind, pure, and noble.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                She made her decision. From her heart came the true intention to
                change. As soon as she did, the unknown dread began to turn into
                light. The light grew brighter and brighter until it completely
                destroyed the darkness.
              </p>
            </div>

            {/* Still Alive */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="https://open.spotify.com/track/7JSEYUeVVMNkoodp23IufO?si=ffb26a5b3e0a407f"
                  className="relative inline-block group text-unpheric-purple"
                >
                  Still Alive
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unpheric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                When the light faded, she stood alone in the stillness. Her
                breath was ragged, her wings scarred, yet her soul shone with a
                new and steadfast flame. She had endured the trial of her own
                making and lived.
              </p>
            </div>

            {/* Escape */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="https://open.spotify.com/track/1QD23ibYyjoCQ156DxvEMD?si=3d4042076354464e"
                  className="relative inline-block group text-unpheric-purple"
                >
                  Escape
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unpheric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                The veil between worlds grew thin, and with a single beat of her
                wings, she rose beyond the reach of shadow. The air grew warm,
                the sky clear, until at last she broke into the wide and radiant
                heavens.
              </p>
            </div>

            {/* Pulse */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="https://open.spotify.com/track/3QsWM6LZvDXdQ8ANZfCmw4?si=59c1e711549344cf"
                  className="relative inline-block group text-unpheric-purple"
                >
                  Pulse
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unpheric-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                Now the angel had become the greatest version of herself. She
                carried the memory of everything she had gone through as a
                "pulse" in her heart. It would remind her never to fall into
                darkness again, and to always remain the angel loved by all.
              </p>
            </div>

            {/* Epilogue */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Epilogue</h3>
              <p className="text-lg md:text-xl leading-relaxed text-unpheric-gray">
                Thus is the tale of the Fallen Angel—a journey from light to
                shadow, from shadow to light, etched forever in the pulse of her
                heart. And though her wings bear the memory of the fall, her
                spirit soars higher than before, for she has known the darkness,
                and chosen the dawn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get It Now Section */}
      <section
        id="get-it-now"
        className="streaming-section py-20 px-4 bg-gradient-to-t from-unpheric-purple/10 to-unpheric-black"
      >
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
