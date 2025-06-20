import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play, Heart, MoreHorizontal } from "lucide-react";

const SpotifyMockup = () => {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (phoneRef.current) {
        const rect = phoneRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) / 20;
        const deltaY = (e.clientY - centerY) / 20;

        gsap.to(phoneRef.current, {
          duration: 0.3,
          rotateY: deltaX,
          rotateX: -deltaY,
          transformPerspective: 1000,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div
        ref={phoneRef}
        className="relative w-64 h-[500px] bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-2 shadow-2xl glow-purple"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Phone Frame */}
        <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-2 text-white text-xs">
            <span>9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
              <div className="w-6 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* Spotify UI */}
          <div className="px-4 py-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-6 h-6 rounded-full bg-unpheric-purple"></div>
              <span className="text-white font-bold">Now Playing</span>
              <MoreHorizontal className="text-white w-6 h-6" />
            </div>

            {/* Album Art */}
            <div className="w-full aspect-square bg-gradient-to-br from-purple-600 via-purple-900 to-black rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-unpheric-purple rounded-full mb-4 mx-auto opacity-80"></div>
                <div className="text-white text-lg font-bold">Fallen Angel</div>
                <div className="text-gray-400 text-sm">UNPHERIC</div>
              </div>
            </div>

            {/* Song Info */}
            <div className="text-center mb-4">
              <h3 className="text-white font-bold text-lg">Fallen Angel</h3>
              <p className="text-gray-400">UNPHERIC</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full h-1 bg-gray-700 rounded-full">
                <div className="w-1/3 h-full bg-unpheric-purple rounded-full"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1:23</span>
                <span>3:04</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-8 mb-4">
              <Heart className="text-unpheric-purple w-6 h-6" />
              <button className="w-12 h-12 bg-unpheric-purple rounded-full flex items-center justify-center">
                <Play className="text-white w-6 h-6 ml-1" fill="white" />
              </button>
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyMockup;
