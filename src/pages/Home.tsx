import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotifyMockup from "../components/SpotifyMockup";
import StreamingPlatforms from "../components/StreamingPlatforms";
import UnphericPhoto from "../assets/images/ryan.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ===== HERO FADE ANIMATION ===== */

      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1.6,
        ease: "power4.out",
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 30,
        duration: 1.4,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-btn", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      gsap.from(".phone-container", {
        opacity: 0,
        x: 80,
        duration: 1.8,
        delay: 0.8,
        ease: "power4.out",
      });

      /* ===== FLOATING PHONE ===== */

      gsap.to(".phone-container", {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      /* ===== SUBTLE PARALLAX BACKGROUND ===== */

      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: heroBgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      /* ===== ABOUT SCROLL REVEAL ===== */

      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="bg-[#050505] text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-0">


        {/* Background Glow + Parallax */}
        <div ref={heroBgRef} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(109,40,217,0.25),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - TEXT */}
          <div className="space-y-8 text-center md:text-left md:ml-20">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-8xl font-bold tracking-[0.18em] md:tracking-[0.25em] leading-tight">
              UNPHERIC
            </h1>

            <p className="hero-sub text-xl md:text-2xl text-gray-400 font-light max-w-lg leading-relaxed mx-auto md:mx-0">
              Emotional Bass Storytelling Through Future Soundscapes.
            </p>

            <button className="hero-btn px-8 py-4 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-500 rounded-full tracking-widest">
              LISTEN NOW
            </button>
          </div>

          {/* RIGHT SIDE - SPOTIFY MOCKUP */}
          <div className="phone-container flex justify-center relative">
            <div className="absolute w-72 h-72 bg-purple-700/30 blur-3xl rounded-full animate-pulse"></div>
            <div className="relative z-10 transition-transform duration-700 hover:scale-105">
              <SpotifyMockup />
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section ref={aboutRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="about-content bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16">

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* PHOTO */}
              <div className="flex justify-center">
                <img
                  src={UnphericPhoto}
                  alt="Unpheric - Ryan Goman"
                  className="w-72 h-72 rounded-full object-cover shadow-2xl"
                />
              </div>

              {/* TEXT */}
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  About Unpheric
                </h2>

                <p>
                  Unpheric, born Ryan Goman in Indonesia, is an electronic music
                  producer blending future bass with cinematic violin elements.
                  Since 2018, he has crafted emotional soundscapes that merge
                  orchestral depth with powerful bass textures.
                </p>

                <p>
                  Officially debuting in 2025 with “Dimensional Tears” and
                  “Last Hope,” followed by the album “Fallen Angel,” Unpheric
                  builds immersive sonic worlds driven by emotion and storytelling.
                </p>

                <p className="italic text-purple-400">
                  “I don't just produce music. I build emotional dimensions.”
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= STREAMING ================= */}
      <StreamingPlatforms />

    </div>
  );
};

export default Home;
