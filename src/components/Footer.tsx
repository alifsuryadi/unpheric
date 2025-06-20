
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCollabPage = location.pathname === '/collab';
  
  const footerRef = useRef<HTMLDivElement>(null);
  const socialTitleRef = useRef<HTMLHeadingElement>(null);
  const contactTitleRef = useRef<HTMLHeadingElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);
  
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/unpheric',
      color: '#E4405F'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@unpheric',
      color: '#FF0000'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43Z"/>
        </svg>
      ),
      url: 'https://tiktok.com/@unpheric',
      color: '#000000'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate social media title (only on home page)
      if (isHomePage && socialTitleRef.current) {
        gsap.fromTo(socialTitleRef.current, {
          opacity: 0,
          y: 30
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        });

        // Animate social media links
        gsap.fromTo(".social-link", {
          opacity: 0,
          y: 20,
          scale: 0.9
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      }

      // Animate contact title (only on collab page)
      if (isCollabPage && contactTitleRef.current) {
        gsap.fromTo(contactTitleRef.current, {
          opacity: 0,
          y: 30
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        });

        // Animate contact link
        gsap.fromTo(".contact-link", {
          opacity: 0,
          y: 20,
          scale: 0.9
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      }

      // Animate copyright section
      gsap.fromTo(copyrightRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, [isHomePage, isCollabPage]);

  return (
    <footer ref={footerRef} className="bg-unpheric-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Conditional Social Media Section - Only on Home Page */}
        {isHomePage && (
          <div className="text-center mb-8">
            <h3 ref={socialTitleRef} className="text-2xl font-bold text-gradient mb-6">
              Follow Unpheric
            </h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link group flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-gray-900/50"
                >
                  <div className="text-unpheric-white group-hover:text-unpheric-purple transition-colors duration-300 group-hover:scale-110 transform">
                    <social.icon size={32} />
                  </div>
                  <span className="text-sm text-unpheric-gray group-hover:text-unpheric-white transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Email Contact Section - Only on collab page */}
        {isCollabPage && (
          <div className="text-center mb-8">
            <h3 ref={contactTitleRef} className="text-2xl font-bold text-gradient mb-6">
              Contact Unpheric
            </h3>
            <div className="flex justify-center">
              <a
                href="mailto:unpheric@gmail.com"
                className="contact-link group flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-900/50"
              >
                <div className="text-unpheric-white group-hover:text-unpheric-purple transition-colors duration-300 group-hover:scale-110 transform">
                  <Mail size={24} />
                </div>
                <span className="text-lg text-unpheric-white group-hover:text-unpheric-purple transition-colors duration-300">
                  unpheric@gmail.com
                </span>
              </a>
            </div>
          </div>
        )}

        {/* Copyright Section */}
        <div ref={copyrightRef} className="text-center pt-8 border-t border-gray-800">
          <p className="text-unpheric-gray text-sm">
            © {new Date().getFullYear()} Unpheric. All rights reserved.
          </p>
          <p className="text-unpheric-gray text-xs mt-2">
            Future Bass • Electronic Music • FL Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
