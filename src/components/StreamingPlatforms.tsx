
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StreamingPlatforms = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      // Animate description
      gsap.fromTo(descriptionRef.current, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      // Animate platform cards
      gsap.fromTo(".platform-card", {
        opacity: 0,
        y: 40,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Listen Now
          </h2>
          <p ref={descriptionRef} className="text-unpheric-gray text-lg">
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
              className="platform-card group flex flex-col items-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-unpheric-purple transition-all duration-300 glow-purple-hover"
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
