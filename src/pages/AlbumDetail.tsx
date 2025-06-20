
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AlbumDetail = () => {
  const { id } = useParams();
  const coverRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const streamingLinks = [
    { name: 'Spotify', url: '#', color: '#1DB954' },
    { name: 'Apple Music', url: '#', color: '#FA243C' },
    { name: 'YouTube Music', url: '#', color: '#FF0000' },
    { name: 'Amazon Music', url: '#', color: '#FF9900' },
    { name: 'Tidal', url: '#', color: '#00FFFF' },
    { name: 'SoundCloud', url: '#', color: '#FF3300' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for cover art
      gsap.to('.album-cover', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: coverRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Story text animation
      gsap.fromTo('.story-text', {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Streaming buttons animation
      gsap.fromTo('.streaming-button', {
        opacity: 0,
        scale: 0.9
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.streaming-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  if (id !== 'fallen-angel') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-unpheric-purple mb-4">Coming Soon</h1>
          <p className="text-unpheric-gray">This album is not yet available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Cover Art */}
      <section ref={coverRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-unpheric-black/50 to-unpheric-black"></div>
        
        <div className="album-cover relative z-10">
          <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-600 via-purple-900 to-black rounded-3xl shadow-2xl glow-purple flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-6">👼</div>
              <h1 className="text-4xl font-bold text-gradient">Fallen Angel</h1>
              <p className="text-unpheric-gray text-xl mt-2">UNPHERIC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Album Story */}
      <section ref={storyRef} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="story-text space-y-8 text-lg md:text-xl leading-relaxed text-unpheric-gray">
            <p>
              "Fallen Angel" is a sonic descent into the heart of a broken paradise. It tells the story 
              of a once-pure angel cast down into the depths of sin—a realm of chaos and distortion. 
              At first, there is a cry for salvation, a haunting echo in the void, but no answer comes.
            </p>
            <p>
              The angel, left alone in the noise, begins to adapt. The sharp, gritty layers of dubstep 
              reflect the clash between what remains of purity and the corruption that surrounds it, 
              while faint, melancholic melodies whisper memories of what once was.
            </p>
            <p>
              As the album unfolds, the angel's identity fades—no longer reaching for the light, but 
              becoming something else entirely: a creature of the dark, reborn in the ruins.
            </p>
          </div>
        </div>
      </section>

      {/* Get It Now Section */}
      <section className="streaming-section py-20 px-4 bg-gradient-to-t from-unpheric-purple/10 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get It Now
          </h2>
          <p className="text-unpheric-gray text-xl mb-12">
            Stream "Fallen Angel" on your favorite platform
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {streamingLinks.map((platform, index) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="streaming-button group flex flex-col items-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-unpheric-purple transition-all duration-300 glow-purple-hover"
              >
                <ExternalLink className="w-8 h-8 mb-3 text-unpheric-purple group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-center text-unpheric-white group-hover:text-unpheric-purple transition-colors duration-300">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlbumDetail;
