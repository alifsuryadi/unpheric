import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotifyMockup from "../components/SpotifyMockup";
import StreamingPlatforms from "../components/StreamingPlatforms";
import UnphericPhoto from "../assets/images/ryan.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bioLinesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const bioLines = [
    "Gain creativity with FL Studio",
    "Dive into the world of future bass and violin 🎶",
    "Just love music whatever the genre 🎹📚",
    "Let's make some music! 🎧",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.from(".hero-title", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3,
      });

      // Bio lines animation
      gsap.from(".bio-line", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.8,
      });

      // About section scroll animation
      gsap.fromTo(
        ".about-photo",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating animation for the phone
      gsap.to(".phone-container", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-unpheric-purple/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio Text */}
          <div ref={bioLinesRef} className="space-y-6">
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-gradient mb-8">
              UNPHERIC
            </h1>
            <div className="space-y-4">
              {bioLines.map((line, index) => (
                <p
                  key={index}
                  className="bio-line text-xl md:text-2xl text-unpheric-white font-light"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side - Spotify Mockup */}
          <div className="phone-container flex justify-center">
            <SpotifyMockup />
          </div>
        </div>
      </section>

      {/* About Unpheric Section */}
      <section ref={aboutRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="about-photo">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-unpheric-purple/30 to-gray-900 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  {/* <div className="w-72 h-72 bg-unpheric-purple rounded-full mx-auto mb-4 opacity-80"></div> */}
                  <img
                    src={UnphericPhoto}
                    alt="Artist Photo"
                    className="w-72 h-72 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-unpheric-gray text-xl">Unpheric - Ryan Goman</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-unpheric-purple/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              About Unpheric
            </h2>
            <div className="space-y-4 text-unpheric-gray text-lg leading-relaxed">
              <p>
                Unpheric, born Ryan Goman in Indonesia, is an electronic music
                producer blending future bass with cinematic violin elements. 
                Since starting his journey in 2018, he has developed a signature
                sound that combines emotional melodies, organic strings, and powerful bass.
              </p>
              <p>
                He officially debuted in 2025 with the singles “Dimensional Tears”
                and “Last Hope,” followed by his album “Fallen Angel” in September 2025
                marking the beginning of a project focused on emotional storytelling
                through bass music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Platforms Section */}
      <StreamingPlatforms />
    </div>
  );
};

export default Home;
